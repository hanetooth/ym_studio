<?php

namespace App\Repositories\Eloquents;

use App\Models\Package;
use App\Repositories\Contracts\PackageRepository as Contract;
use App\Repositories\Contracts\DiscountRepository as DiscountRepo;
use Exception;
use Illuminate\Support\Facades\DB;

class PackageRepository extends BaseRepository implements Contract
{
    /**
     * @var \App\Repositories\Eloquents\DiscountRepository
     */
    private $discountRepo;

    /**
     * UserRepository constructor.
     *
     * @param \App\Models\Package $source
     * @param \App\Repositories\Contracts\DiscountRepository $discountRepo
     */
    public function __construct(Package $source, DiscountRepo $discountRepo)
    {
        $this->discountRepo = $discountRepo;
        $this->setSource($source);
    }

    /**
     * All packages
     *
     * @param int $perPage
     * @return mixed|void
     */
    public function all($perPage = 6)
    {
        return $this
                ->getSource()
                ->orderBy('display_order')
                ->paginate($perPage);
    }

    /**
     * Check exists or not by alias
     *
     * @param $alias
     * @return bool
     */
    public function existsByAlias($alias)
    {
        return $this->getSource()->where('alias', $alias)->exists();
    }

    /**
     * All packages
     *
     * @param string $alias
     * @return mixed|void
     */
    public function findByAlias($alias)
    {
        return $this
            ->getSource()
            ->where('alias', $alias)
            ->first();
    }

    /**
     * Purchase a package
     *
     * @param array $attributes
     *
     * @return \Illuminate\Database\Eloquent\Model
     * @throws \Exception
     */
    public function purchase(array $attributes)
    {
        $package = $this->find($attributes['package_id']);
        DB::beginTransaction();
        try {
            $discountId = array_get($attributes, 'discount_id');
            $package->users()->attach([
                $attributes['user_id'] => [
                    'discount_id' => $discountId
                ]
            ]);
            if ($discountId) {
                $this->discountRepo->useDiscount($discountId);
            }
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
        return $package;
    }
}

<?php

namespace App\Repositories\Eloquents;

use App\Exceptions\InvalidDiscountCouponException;
use App\Models\Discount;
use App\Repositories\Contracts\DiscountRepository as Contract;
use Exception;

class DiscountRepository extends BaseRepository implements Contract
{
    /**
     * UserRepository constructor.
     *
     * @param \App\Models\Discount $source
     */
    public function __construct(Discount $source)
    {
        $this->setSource($source);
    }

    /**
     * All packages
     *
     * @param int $perPage
     * @return mixed|void
     */
    public function all($perPage = 0)
    {
        $query = $this->getSource()->unused();

        if ($perPage) {
            return $query->paginate($perPage);
        }

        return $query->get();
    }

    /**
     * Find discount by coupon code
     *
     * @param string $couponCode
     *
     * @return \Illuminate\Database\Eloquent\Model
     * @throws \Exception
     */
    public function findByCouponCode($couponCode)
    {
        try {
            return $this->getSource()
                        ->unused()
                        ->where('coupon_code', $couponCode)
                        ->firstOrFail();
        } catch (Exception $e) {
            throw new InvalidDiscountCouponException();
        }
    }

    /**
     * use discount
     *
     * @param string $id
     *
     * @return bool
     * @throws \App\Exceptions\InvalidDiscountCouponException
     */
    public function useDiscount($id)
    {
        try {
            $discount = $this->getSource()
                ->unused()
                ->where('id', $id)
                ->firstOrFail();
            return $discount->update([ 'is_used' => true ]);
        } catch (Exception $e) {
            throw new InvalidDiscountCouponException();
        }
    }
}

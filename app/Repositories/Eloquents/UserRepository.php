<?php

namespace App\Repositories\Eloquents;

use App\Models\User;
use App\Repositories\Contracts\UserRepository as Contract;
use App\Repositories\Contracts\MembershipRepository as MembershipRepo;

class UserRepository extends BaseRepository implements Contract
{
    /**
     * @var \App\Repositories\Eloquents\MembershipRepository
     */
    private $membershipRepo;

    /**
     * UserRepository constructor.
     *
     * @param \App\Models\User $source
     * @param \App\Repositories\Contracts\MembershipRepository $membershipRepo
     */
    public function __construct(User $source, MembershipRepo $membershipRepo)
    {
        $this->membershipRepo = $membershipRepo;
        $this->setSource($source);
    }

    public function create($attributes)
    {
        $membership = $this->membershipRepo->findByName('newbie');
        if (!array_has($attributes, 'membership_id')) {
            $attributes['membership_id'] = $membership->id;
        }
        return parent::create($attributes);
    }
}

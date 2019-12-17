<?php

namespace App\Repositories\Eloquents;

use App\Models\Membership;
use App\Repositories\Contracts\MembershipRepository as Contract;

class MembershipRepository extends BaseRepository implements Contract
{
    /**
     * UserRepository constructor.
     *
     * @param \App\Models\Membership $source
     */
    public function __construct(Membership $source)
    {
        $this->setSource($source);
    }

    public function findByName($name)
    {
        return $this->getSource()->where('name', $name)->first();
    }
}

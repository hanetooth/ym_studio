<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Repositories\Contracts\DiscountRepository as DiscountRepo;

class GetUsableCoupons extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:coupons';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get usable\ discount coupon codes.';

    /**
     * @var \App\Repositories\Eloquents\DiscountRepository
     */
    private $discountRepo;

    /**
     * Create a new command instance.
     *
     * @param \App\Repositories\Contracts\DiscountRepository $discountRepo
     *
     * @return void
     */
    public function __construct(DiscountRepo $discountRepo)
    {
        $this->discountRepo = $discountRepo;
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $discounts = $this->discountRepo->all();
        if ($discounts->count() == 0) {
            $this->error('There is no usable coupon code. Generate one.');
            return;
        }
        foreach ($discounts as $discount) {
            $this->info($discount->coupon_code);
        }
    }
}

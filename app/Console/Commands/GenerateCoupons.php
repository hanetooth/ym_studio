<?php

namespace App\Console\Commands;

use App\Models\Discount;
use Illuminate\Console\Command;
use App\Repositories\Contracts\DiscountRepository as DiscountRepo;

class GenerateCoupons extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:coupons {count=1 : How many coupons do you want to create? Default count is 0 }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate discount coupon codes.';

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
        $count = (int) $this->argument('count');
        if ($count > 0) {
            $discounts = factory(Discount::class, $count)->make();
            if ($discounts instanceof Discount) {
                $this->info($discounts->coupon_code);
            }
            foreach ($discounts as $discount) {
                $this->info($discount->coupon_code);
            }
            return;
        }
    }
}

<?php

namespace App\Exceptions;

use Exception;

class InvalidDiscountCouponException extends Exception
{
    protected $code = '422';
    protected $message = 'Invalid Discount Coupon.';
}

<?php

/**
 * Random string for coupon code
 *
 * @param string $strPrefix
 * @param int $postFixLength
 *
 * @return string
 */
function generateCouponCode($strPrefix = "YM", $postFixLength = 8)
{
    return $strPrefix . strtoupper(str_random($postFixLength));
}

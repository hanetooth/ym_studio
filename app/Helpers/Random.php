<?php

namespace App\Helpers;

/**
 * Class Random
 *
 * @package App\Helpers
 */
class Random
{
    /**
     * @param int $length
     * @param $count
     * @param string $stringDigits
     * @return array
     */
    public static function randomDigit($length, $count, $stringDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    {
        $codes = [];

        while(count($codes) < $count) {
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString = (string)$randomString . substr($stringDigits, rand(0, strlen($stringDigits)-1), 1);
            }
            if(!in_array($randomString, $codes)) {
                $codes[] = (string)$randomString;
            }
        }

        return $codes;
    }
}

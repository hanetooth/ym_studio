<?php

namespace Tests;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Tests\Supports\Seedable;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
}

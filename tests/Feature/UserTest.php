<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_user_signup()
    {
        $userAttributes = [
            'name' => 'John Snow',
            'email' => 'johnsnow@test.dev',
            'password' => 'Pa$$w0rd',
            'password_confirmation' => 'Pa$$w0rd'
        ];
        $response = $this->post('/api/auth/signup', $userAttributes);
        $response->assertSuccessful();
    }

    public function test_user_login()
    {
        $response = $this->post('/api/auth/login', [
            'email' => 'johndoe@test.dev',
            'password' => 'Pa$$w0rd'
        ]);
        $response->assertSuccessful();
        $response->assertJsonStructure([
            'access_token',
            'user'
        ]);

        $accessToken = $response->json('access_token');

        $meResponse = $this->get('/api/me', [
            'Authorization' => 'Bearer '. $accessToken,
        ]);
        $meResponse->assertSuccessful();
        $meResponse->assertJson([
            'email' => 'johndoe@test.dev'
        ]);
    }
}

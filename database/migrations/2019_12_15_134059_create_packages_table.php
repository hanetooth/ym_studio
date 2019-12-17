<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->uuid('id')->primary();

            $table->string('name');
            $table->string('alias')->unique();
            $table->text('description');

            $table->integer('display_order');
            $table->decimal('price');
            $table->integer('total_credit');
            $table->integer('validity_month')->default(0);
            $table->string('type')->comment('[ "shareable", "non_shareable", "unlimited" ]');

            $table->boolean('newbie_first_attend')->default(false);
            $table->decimal('newbie_additional_credit')->default(0);
            $table->text('newbie_note')->nullable();

            $table->uuid('tag_id')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packages');
    }
}

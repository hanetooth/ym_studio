<?php

namespace App\Repositories\Contracts;

interface BaseRepository
{
    /**
     * Get all rows
     *
     * @return mixed
     */
    public function all();

    /**
     * Create a row with provided attributes
     *
     * @param array $attributes
     * @return mixed
     */
    public function create($attributes);

    /**
     * Find record by provided $id & update with provided attributes
     *
     * @param integer $id
     * @param array $attributes
     * @return mixed
     */
    public function update($id, $attributes);

    /**
     * Find record by provided $id & delete it
     *
     * @param integer $id
     * @return mixed
     */
    public function delete($id);

    /**
     * Set source
     *
     * @param mixed $source
     * @return void
     */
    public function setSource($source);

    /**
     * Get source
     *
     * @return mixed
     */
    public function getSource();

    /**
     * Find and return the Model(s) of given id(s)
     *
     * @param string|int|array "id" (or) list of "id"
     *
     * @return mixed
     */
    public function find($id);
}

<?php

namespace App\Repositories\Eloquents;

class BaseRepository
{
    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    public $source;

    /**
     * Find and return the Model(s) of given id(s)
     *
     * @param string|int|array "id" (or) list of "id"
     *
     * @return mixed
     */
    public function find($id)
    {
        return $this->getSource()->findOrFail($id);
    }

    /**
     * Get all rows
     *
     * @return mixed
     */
    public function all()
    {
        return $this->getSource()->get();
    }

    /**
     * Create a row with provided attributes
     *
     * @param array $attributes
     * @return mixed
     */
    public function create($attributes)
    {
        return $this->getSource()->create($attributes);
    }

    /**
     * Find record by provided $id & update with provided attributes
     *
     * @param integer $id
     * @param array $attributes
     * @return mixed
     */
    public function update($id, $attributes)
    {
        $model = $this->find($id);
        return $model->update($attributes) ? $model : null;
    }

    /**
     * Find record by provided $id & delete it
     *
     * @param integer $id
     * @return mixed
     */
    public function delete($id)
    {
        return $this->find($id)->delete();
    }

    /**
     * Set source
     *
     * @param \Illuminate\Database\Eloquent\Model $source
     * @return void
     */
    public function setSource($source)
    {
        $this->source = $source;
    }

    /**
     * Get source
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getSource()
    {
        return $this->source;
    }
}

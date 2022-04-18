import React from 'react';

export const NewExerciseForm = () => {
  return (
    <form action="/api/exercise/add" method="post">
      <h3>Add exercises</h3>
      <p><code>POST /api/exercise/add</code></p>
      <input id="uid" type="text" name="userId" placeholder="userId*" />
      <input id="desc" type="text" name="description" placeholder="description*" />
      <input id="dur" type="text" name="duration" placeholder="duration* (mins.)" />
      <input id="dat" type="text" name="date" placeholder="date (yyyy-mm-dd)" />
      <input type="submit" value="Submit" />
    </form>
  );
}

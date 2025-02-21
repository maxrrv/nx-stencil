import { MyInput } from '@ui/react';

export function App() {
  return (
    <form action="./something" method="post">
      <MyInput name="my-input" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

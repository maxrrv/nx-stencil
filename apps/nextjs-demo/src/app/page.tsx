import { MyInput } from '@ui/react/ssr';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <form action="./something" method="post">
      <MyInput name="my-input" />
      <button type="submit">Submit</button>
    </form>
  );
}

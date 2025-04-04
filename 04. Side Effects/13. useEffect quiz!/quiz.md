1. In what way are React components meant to be "pure functions"

   - Given the same prop or state the component will always return
     the same content, or UI
   - Rendring or rerendring a component will never have
     any kind of side effect on an outside system

2. What is a "side effect" in React? What are some examples?

- Any code that affect or interact with an outside system
- local storage, api, websockets, DOM manipulation

3. What is NOT a "side effect" in React? Examples?

- anything that react is in charge of
- maintaining state , keeping the ui sync with data,
  rendring dom elements

4. When does React run your useEffect function? When does it NOT run
   the effect function?

   - as soon as the components render for the first time
   - on evrey re-render of the components assuming there is no
     dependecies array
   - will not run the effect when the value of the dependecies in
     the array stay the same between renders

5. How would you explain what the "dependecies array" is?

- second param to the useEffect function
- a way for react to know whether or not it should re-render the
  effect function or not
  is an array of dependecies where the render the side effect function rely on

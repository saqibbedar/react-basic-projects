## useEffect() Hook in React

useEffect() is a react hook that tells react to do this when (pick one): 
- This component re-renders
- This component mounts
- The state of a value

## useEffect(function, [dependencies])

```js
useEffect(()=>{}) // Runs after every re-render
useEffect(()=>{}, []) // Runs only on mount
useEffect(()=>{}, [value]) // Runs on mount + when value changes
```

## USES

1. Event Listeners
2. DOM manipulation
3. Subscriptions (real-time updates)
4. Fetching Dat from an API
5. Clean up when a component unmounts

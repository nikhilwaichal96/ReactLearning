/**
 * What is useContext in react?
 * useContext is a hook that allows you to use context in functional component.
 * meaning?
 * useContext is used to pass data to the component tree without passing props down manually at every level.
 * 
 * What is its use?
 * useContext is used to access the context value in the functional component.
 * What is context value?
 * Context value is the value passed to the provider.
 * 
 * What is context provider?
 * Context provider is a component that provides the context value to the component tree.
 * 
 * Give an example of useContext?
 * const MyContext = React.createContext();
 * const value = useContext(MyContext);
 * 
 * Give an example of useContext with context provider?
 * const MyContext = React.createContext();
 * <MyContext.Provider value={value}>
 * <MyComponent />
 * </MyContext.Provider>
 * 
 * Why useContext is used?
 * useContext is used to avoid prop drilling in react.
 * what is prop drilling?
 * Prop drilling is the process of passing props from one component to another component.
 * 
 * How to use useContext in react?
 * 1. Create a context using React.createContext() method.
 *  const MyContext = React.createContext();
 * 2. Create a provider using MyContext.Provider component.
 * <MyContext.Provider value={value}>
 * <MyComponent />
 * </MyContext.Provider>
 * 3. Use useContext hook to access the context value in the functional component.
 * const value = useContext(MyContext);
 *  
 * What is the syntax for useContext?
 * const value = useContext(MyContext);
 *   
 *
 */
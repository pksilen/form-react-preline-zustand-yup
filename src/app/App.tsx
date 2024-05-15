import { ChakraProvider } from '@chakra-ui/react';
import classNames from './App.module.scss';
import { UserList } from './components/userlist/UserList';
import { UserRegistrationForm } from './components/userregistrationform/UserRegistrationForm';

export default function App() {
  return (
    <ChakraProvider>
      <main className={classNames.main}>
        <UserRegistrationForm />
        <div className={classNames.verticalDivider}></div>
        <UserList />
      </main>
    </ChakraProvider>
  );
}

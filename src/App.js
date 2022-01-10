import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm /> 

    return (
        <ChatEngine 
            height="100vh"
            projectID="4392ac01-542b-47f6-bee0-bf3f01b099db"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}
    

export default App;
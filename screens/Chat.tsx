import {View, SafeAreaView, Text} from "react-native";
import React, { ReactElement } from "react";
import NotifyHeader from "../components/NotifyHeader";
import ChatList from "../components/ChatList";

const Chat = (): ReactElement | null => {
    return (
        <SafeAreaView>
            <NotifyHeader header="Chat"/>
            <ChatList />
        </SafeAreaView>
    );
};

export default Chat;
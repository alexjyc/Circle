import {View, SafeAreaView, Text} from "react-native";
import React, { ReactElement } from "react";
import NoticeHeader from "../components/NotifyHeader";
import { ScrollView } from "react-native-gesture-handler";

const Notice = (): ReactElement | null => {
    return (
        <SafeAreaView>
            <NoticeHeader header="Notification"/>
            <ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notice;
import { View, Text, Modal, Button } from "react-native";
import React, { useState } from "react";
import TitleComponent from "./TitleComponent";
import RowComponent from "./RowComponent";
import TextComponent from "./TextComponent";
import { globalStyles } from "../styles/globalStyles";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../constants/colors";
import SpaceComponent from "./SpaceComponent";
import DatePicker from "react-native-date-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface Props {
  type?: "date" | "time" | "datetime";
  title?: string;
  placeholder?: string;
  selected?: Date;
  onSelect: (val: Date) => void;
}
const DateTimePickerComponent = (props: Props) => {
  const { type, title, placeholder, selected, onSelect } = props;
  const [isVisibalModalDateTime, setIsVisibalModalDateTime] = useState(false);
  const handleConfirm = (date:Date) => {
    console.log("date:", date)
    setIsVisibalModalDateTime(false)
  }
  return (
    <>
      <View style={{ marginBottom: 16 }}>
        {title && <TitleComponent text={title} />}
        <RowComponent
          onPress={() => setIsVisibalModalDateTime(true)}
          styles={[
            globalStyles.inputContainer,
            {
              marginTop: title ? 8 : 0,
            },
          ]}
        >
          <TextComponent
            flex={1}
            text={
              selected ? selected.toISOString() : placeholder ? placeholder : ""
            }
          />
          <Entypo name="chevron-thin-down" size={20} color="white" />
        </RowComponent>
            <View>
            <DateTimePickerModal
              isVisible={isVisibalModalDateTime}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={()=>setIsVisibalModalDateTime(false)}
              />
            </View>
      </View>
    </>
  );
};

export default DateTimePickerComponent;

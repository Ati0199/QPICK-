import { Component } from "react";
import "./PhoneBrendListItem.css";
import type { ReactNode } from "react";

interface IPhone {
  phone: { id: string; name: string };
  key: string;
}

export default class PhoneBrendListItem extends Component<IPhone> {
  state = {
    isLoading: true,
  };

  render(): ReactNode {
    return <div className="phone">{this.props.phone.name}</div>;
  }
}

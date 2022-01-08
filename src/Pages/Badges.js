import React, { Component } from "react";
import BadgesList from "../Components/BadgesList";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import { Link } from "react-router-dom";
import api from "../api";
import PageLoading from "../Components/PageLoading";
import PageError from "../Components/PageError";
import MiniLoader from "../Components/MiniLoader";

export class Badges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("5.componentDidUpdate() ->");
  //   console.log({ prevProps: prevProps, prevState: prevState });
  //   console.log({ props: this.props, state: this.state });
  // }

  // componentWillUnmount() {
  //   console.log("6.componentWillUnmount() ->");
  //   clearTimeout(this.timeoutId);
  // }

  render() {
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New Badge
              </Link>
            </div>
            <div className="Badge__list">
              <div className="Badges__container">
                {this.state.loading && <MiniLoader />}
                <BadgesList Badges={this.state.data} />
                {this.state.loading && <MiniLoader />}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;

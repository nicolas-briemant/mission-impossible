import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import uniqid from 'uniqid';
import { Button } from '@blueprintjs/core';

const StyleMission = glamorous.div(
  {
    textAlign: 'center',
    margin: '10px',
    transition: 'all .2s ease-in-out',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'block',
    width: '300px',
    boxShadow: '0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
  },
  ({ isSelected, isHovered }) => ({
    backgroundColor: isSelected ? 'indianred' : 'white',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  }),
);

const HeadMission = glamorous.div({
  background: 'dodgerblue',
  padding: '30px',
  height: '140px',
});

const TitleMission = glamorous.h4({
  margin: '0px',
  fontSize: '17px',
  fontWeight: 'normal',
  color: 'white',
  textTransform: 'capitalize',
});

const ContainMission = glamorous.div({
  padding: '20px',
  position: 'relative',
});

const CompanieName = glamorous.p({
  fontSize: '13px',
  color: '#cbd7f3',
  marginTop: '15px',
  fontWeight: '100',
});

const CompanieLogo = glamorous.img({
  display: 'inline-block',
  width: '80px',
  height: '80px',
  borderRadius: '100%',
  verticalAlign: 'middle',
  marginTop: '-60px',
  boxShadow: '0px 0px 65px 0px rgba(131, 100, 238,0.3)',
  border: '7px solid #efefef',
  background: 'white',
});

const CompanieColor = glamorous.div(
  {
    display: 'inline-block',
    width: '80px',
    height: '80px',
    borderRadius: '100%',
    verticalAlign: 'middle',
    marginTop: '-60px',
    boxShadow: '0px 0px 65px 0px rgba(131, 100, 238,0.3)',
    border: '7px solid #efefef',
  },
  ({ color }) => ({
    background: color,
  }),
);

const ButtonRight = glamorous(Button)({
  position: 'absolute',
  top: '-15px',
  marginLeft: '30px',
});

const ButtonLeft = glamorous(Button)({
  position: 'absolute',
  top: '-15px',
  marginLeft: '-140px',
});

const ListOfWorkers = glamorous.ul({
  listStyle: 'none',
  padding: 0,
});

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.boundUpdateIsHovered = this.updateIsHovered.bind(this);
  }

  updateIsHovered() {
    this.setState({ isHovered: !this.state.isHovered });
  }

  render() {
    const { id, name, companies, manager, workersList, isSelected, removeMission, toggleMission } = this.props;
    return (
      <StyleMission
        isHovered={this.state.isHovered}
        isSelected={isSelected}
        onMouseEnter={() => this.boundUpdateIsHovered()}
        onMouseLeave={() => this.boundUpdateIsHovered()}
      >
        <HeadMission>
          <TitleMission>{name}</TitleMission>
          <CompanieName>{companies.name}</CompanieName>
        </HeadMission>
        <ContainMission>
          {companies.avatar.url || companies.avatar.src ? (
            <CompanieLogo src={companies.avatar.url ? companies.avatar.url : companies.avatar.src} alt="logo" />
          ) : (
            <CompanieColor color={companies.avatar.color} />
          )}
          {this.state.isHovered ? (
            <Fragment>
              <ButtonLeft iconName="add" onClick={() => toggleMission(id)} />
              <ButtonRight className="pt-intent-danger" iconName="trash" onClick={() => removeMission(id)} />
            </Fragment>
          ) : null}
          <ListOfWorkers>
            <li>
              Manager: {manager.firstName} {manager.lastName}
            </li>
            Workers ({workersList.length}):
            <div>
              {workersList.map(w => {
                return (
                  <li key={uniqid()}>
                    {w.firstName} {w.lastName}
                  </li>
                );
              })}
            </div>
          </ListOfWorkers>
        </ContainMission>
      </StyleMission>
    );
  }
}

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  companies: PropTypes.object.isRequired,
  manager: PropTypes.object.isRequired,
  workersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isSelected: PropTypes.bool,
  removeMission: PropTypes.func.isRequired,
  toggleMission: PropTypes.func.isRequired,
};

export default Mission;

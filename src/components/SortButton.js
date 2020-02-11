import React, { Component } from 'react'
import { connect } from "react-redux";
import { sort } from "../reducers/actions"

class SortButton extends Component {
    constructor (){
        super();

        this.state = {
            showMenu: false,
            order: true,
            isActive: ""

        }

        this.showMenu = this.showMenu.bind(this)
    }

    showMenu = () =>{
        this.setState({showMenu: !this.state.showMenu})
    }

    render() {

        function compareValues(key, order) {
            return function innerSort(a, b) {
              if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
              }          
              const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
              const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];          
              let comparison = 0;
              if (varA > varB) {
                comparison = 1;
              } else if (varA < varB) {
                comparison = -1;
              }
              return (
                (order === true) ? (comparison * -1) : comparison
              );
            };
          }  
        
        const sort = (e,param, order) => {
            var clickedId = e.target.textContent;
            this.props.items.sort(compareValues(param, order))
            this.setState({order: !this.state.order, isActive: clickedId})
            this.props.sort(this.props.items)         
         }

        return (
          <div className="sort" >
            <div className="sort__title" onClick={this.showMenu}>
              SORT
            </div>
            
            {
              this.state.showMenu
                ? (
                  <div className="sort__menu">
                    <div className={this.state.isActive === "Title ↓↑" && "menu__div--active"} onClick={(e) => sort(e, "title", this.state.order)}> <p className="menu__text">Title ↓↑</p> </div>
                    <div className={this.state.isActive === "Year ↓↑" && "menu__div--active"} onClick={(e) => sort(e, "release_date", this.state.order)}> <p className="menu__text">Year ↓↑</p> </div>
                    <div className={this.state.isActive === "Rating ↓↑" && "menu__div--active"} onClick={(e) => sort(e, "vote_average", this.state.order)}> <p className="menu__text">Rating ↓↑</p> </div>
                    <div className={this.state.isActive === "Popularity ↓↑" && "menu__div--active"} onClick={(e) => sort(e, "popularity", this.state.order)}> <p className="menu__text">Popularity ↓↑</p> </div>
                  </div>
                )
                : (
                  null
                )
            }
          </div>
        );
      }
    }

    const mapStateToProps = state => {    
        return {
          items: state.posts.items,
          order: state.posts.order
        };
      };
      
    export default connect(mapStateToProps, { sort })(SortButton);
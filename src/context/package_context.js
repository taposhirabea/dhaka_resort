
import React, { useContext, Component } from 'react'

import { packagesData as items } from '../utils/packageData'

const PackageContext = React.createContext()

class PackageProvider extends Component {
  state= {
    packages: [],
    sortedPackages: [],
    featuredPackages: []
  }

  componentDidMount() {
    let packages = this.formatData(items);
    let featuredPackages = packages.filter(room => room.featured === true);
    this.setState({
      packages,
      featuredPackages,
      sortedPackages: packages
    }); 
  };
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.id;
      let images = item.images;

        let room = {...item,images, id}
        return room;
    });
    return tempItems;
  }
  render() {
    return (
      <PackageContext.Provider value={{...this.state}}>
        {this.props.children}
      </PackageContext.Provider>
    )
  }
}
export const usePackagesContext = () => {
  return useContext(PackageContext)
}

const PackageConsumer = PackageContext.Consumer;

export {PackageProvider,PackageContext, PackageConsumer};
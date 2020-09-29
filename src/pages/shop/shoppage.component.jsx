import React from 'react';
import SHOP_DATA from './shop-data'
import CollectionPreview from '../../components/collection-preview/collection-preview'
class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state
        return(
        <div className='shop-page'>
            {
                collections.map(({id, ...otherprops})=>(
                    <CollectionPreview key= {id} {...otherprops}
                     />
                ))
            }
            
            </div>
            )
    }
}

export default ShopPage;
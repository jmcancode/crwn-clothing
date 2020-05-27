import React from 'react';
import {connect } from 'react-redux';
import { createStructuredselector } from 'reselect';

import {CollectionPreview} from '../collection-preview/collection-preview.component.jsx';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections}) => (
    <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
     ))}
    </div>
);

const mapStateToProps = createStructuredselector({
    collection: selectCollections
  });
export default connect(mapStateToProps)(CollectionsOverview);
import React, { useState, useEffect, Dispatch } from 'react'
import { connect } from 'react-redux'
import s from './index.module.scss'
import { RootState, TPhoto } from '../../ducks/photos/types'
import { photosSelectors, photosThunks } from '../../ducks/photos'
import ImageCard from './ImageCard'
import SortOption from './SortOption'

interface IProps {
  loading: boolean
  photos: TPhoto[]
  fetchImages: () => void
}

const PhotosPage: React.FC<IProps> = ({ loading, photos, fetchImages }) => {
  const [sortBy, setSortBy] = useState('name')

  useEffect(() => {
    if (!photos.length) {
      fetchImages()
    }
  }, [])

  const sortByField = (a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1
    }

    if (a[sortBy] > b[sortBy]) {
      return 1
    }

    return 0
  }

  const renderImages = () => {
    return loading ? (
      <span>Loading...</span>
    ) : (
      photos.sort(sortByField).map((photo => <ImageCard key={photo.name} {...photo} />))
    )
  }

  return (
    <div>
      <h1>Photos</h1>
      <div className={s.sortOptionsWrap}>
        <SortOption field='name' label='Name' active={sortBy === 'name'} onClick={setSortBy} />
        <SortOption field='size' label='Size' active={sortBy === 'size'} onClick={setSortBy} />
        <SortOption field='editedAt' label='Modified' active={sortBy === 'editedAt'} onClick={setSortBy} />
      </div>
      <div className={s.imagesWrap}>
        {renderImages()}
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  photos: photosSelectors.getPhotos(state),
  loading: photosSelectors.getLoading(state),
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchImages: () => dispatch(photosThunks.fetchData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage)

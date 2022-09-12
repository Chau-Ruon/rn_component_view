import React,{useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
} from "react-native";
import { SIZE,TEXT,COLOR,SHADOWS } from '../../theme';
import ImagePicker from "react-native-image-crop-picker";
import {plus} from "../../assets/index"
import { useDispatch, useSelector } from "react-redux";
import {
  setTitle,
  setContent,
  addPhoto,
  getPhotos,
  deletePhoto,
} from "../../data/newPostData";



const LightBoxImage = (props) =>{
    
    const [showLightBox, setShowLightBox] = useState(false);
    const [highlights, setHighlights] = useState(false);
    const [indexHighlights, setIndexHighlights] = useState(undefined);
    const [type, setType] = useState("");
    const dispatch = useDispatch();
    const images = useSelector(getPhotos);

    const GroupImagePicker = (props) => {
        const IMAGE_OPTIONS = {
          // compressImageMaxWidth: 900,
          // compressImageMaxHeight: 600,
          cropping: true,
          includeBase64: true,
          cropperCancelText: 'Huỷ',
          cropperChooseText: 'Chọn',
          includeExif: true,
          mediaType: type,
          forceJpg: true,
          compressImageQuality: 0.2,
        };
    
        const openGallery = () => {
          ImagePicker.openPicker(IMAGE_OPTIONS).then(selectedImages => {
            // if (images && images.length > 9) {
            //   setShow(true);
            // } else {
              // convert image to BASE64
              // `data:${selectedImages[i].mime};base64,${selectedImages[i].data}`;
    
              dispatch(addPhoto(selectedImages));
            // }
          }).catch(error => {
            console.log(`openGallery`,error);
          });
        }
    
        const openCamera = () => {
          ImagePicker.openCamera(IMAGE_OPTIONS).then(images => {
            setImages(images);
          }).catch(error => {
    
          });
        }
    
        const removeImage = (index) => {
          dispatch(deletePhoto(index));
        }
    
        const imageHighlights = (index) => {
          if (index != indexHighlights | !highlights) {
            setIndexHighlights(index)
            setHighlights(true);
          } else {
            setHighlights(false);
          }
        }
    
        return (
          <View style={styles.listImageContainer}>
            {images && images.map((image, index) => {
                    return (
                        <TouchableWithoutFeedback key={index} onPress={() => imageHighlights(index)}>
                            <View style={{ width: SIZE.boxImage, height: SIZE.boxImage, marginRight: 5, marginTop: 5, }}>
                                <View style={[styles.imageItemContainer, highlights && indexHighlights === index ?
                                    {
                                        borderColor: "#08db46",
                                        borderWidth: 2,
                                    }
                                    : null]}>
                                    <Image source={{ uri: image.path }} style={styles.imageItem} />
                                </View>
                                <TouchableOpacity style={styles.removeImageButton} onPress={() => removeImage(index)} >
                                <Image source={iconX} style={styles.removeIcon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
            }
            <TouchableOpacity style={styles.addImageButton} onPress={openGallery}>
              <Image source={plus} style={styles.addImageIcon} />
            </TouchableOpacity>
          </View>
        );
      };
    return(
        <View>
          <GroupImagePicker {...props} />
        </View>
    )
}
export default LightBoxImage;

const styles = StyleSheet.create({
    listImageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        // backgroundColor:"#FCB900",
    },
    addImageButton: {
        width: SIZE.boxImage - 4,
        height: SIZE.boxImage - 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 16,
        marginTop: 7,
        marginRight: 5,
    },
    addImageIcon: {
        width: 20,
        height: 20,
        tintColor: '#ddd',
    },
})

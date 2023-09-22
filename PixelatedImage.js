import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import { Storage } from 'aws-amplify';

function PixelatedImage() {
    const [imageUrl, setImageUrl] = useState(null);

    async function fetchImage() {
        try {
            const imageUrl = await Storage.get('your-image-key.jpg'); // Replace with your image's key
            return imageUrl;
        } catch (error) {
            console.error("Error fetching image: ", error);
        }
    }

    useEffect(() => {
        async function loadImage() {
            const url = await fetchImage();
            setImageUrl(url);
        }

        loadImage();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {imageUrl && (
                <>
                    <Image 
                        source={{ uri: imageUrl }} 
                        style={{ width: 30, height: 30 }} 
                        resizeMode="cover" 
                    />
                    <Image 
                        source={{ uri: imageUrl }} 
                        style={{ width: 300, height: 300 }} 
                        resizeMode="stretch" 
                    />
                </>
            )}
        </View>
    );
}

export default PixelatedImage;

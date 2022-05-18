import axios from 'axios';


export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '2986b34429mshb5562da8bc34d7ap14eb26jsnd4aa47f97167'
      }
    });
    return data;
  } catch (error) {
    console.log(error)
  }
}


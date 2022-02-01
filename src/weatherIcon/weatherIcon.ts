import sun from '../icons/sun.svg'
import moon from '../icons/moon.svg'
import sunrain from '../icons/sunrain.svg'
import moonrain from '../icons/moonrain.svg'
import cloud from '../icons/cloud.svg'
import brokencloud from '../icons/brokencloud.svg'
import rain from '../icons/rain.svg'
import suncloud from '../icons/suncloud.svg'
import mooncloud from '../icons/mooncloud.svg'
import storm from '../icons/storm.svg'
import snow from '../icons/snow.svg'
import mist from '../icons/mist.svg'

export const getWeatherIcons = (icon: string) => {
   switch (icon) {
      case '01d': return sun
      case '01n': return moon
      case '02d': return suncloud
      case '02n': return mooncloud
      case '03d': return cloud
      case '03n': return cloud
      case '04d': return brokencloud
      case '04n': return brokencloud
      case '09d': return rain
      case '09n': return rain
      case '10d': return sunrain
      case '10n': return moonrain
      case '11d': return storm
      case '11n': return storm
      case '13d': return snow
      case '13n': return snow
      case '50d': return mist
      case '50n': return mist
   }
}
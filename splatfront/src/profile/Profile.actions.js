import $ from 'jquery'
import BASEURL from '../baseurl'

export function profileContent(person){
  return{
    type: "profGET",
    value: person
  };
}

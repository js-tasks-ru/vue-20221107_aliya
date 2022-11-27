import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',
  data(){
    return{
      fetchMeetups:null,
      errMeetups:null
    }    
  },
 
  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  methods:{
    getMeetups(){
      this.fetchMeetups = null;
      fetchMeetupById(this.meetupId).then(
        (response) => 
          {         
            this.fetchMeetups = response;            
          } ,
        (error) => {
          this.fetchMeetups = null;
          console.log('error');
          this.errMeetups = error.message
        }
      );
    }
  },

  watch:{    
    meetupId(){
      this.getMeetups(); 
    }
  },

  props:{
    meetupId:{
      type:Number,
      required:true 
    }
  },

  mounted(){
    this.getMeetups()
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
        <MeetupView v-if="fetchMeetups"  :meetup="fetchMeetups"/>
        <UiContainer v-else-if="!errMeetups">
          <UiAlert>Загрузка...</UiAlert>
        </UiContainer>
        <UiContainer v-else>
          <UiAlert>{{ errMeetups }}</UiAlert>
        </UiContainer>
    </div>`,
});

import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

const ItemIcons = agendaItemIcons;
const itemTitles = agendaItemDefaultTitles;

export default defineComponent({
  name: 'MeetupAgendaItem',
  
  props:{
    agendaItem:{
      type: Object,
      required: true
    },
  },

  methods: {
    iconType() {
      return ItemIcons[this.agendaItem.type]
    },
    
    titleType(){
      return  this.agendaItem.title?this.agendaItem.title:itemTitles[this.agendaItem.type]
    }
  },

  template: `
     <div class="agenda-item" >
        <div class="agenda-item__col">
        <img :src="\`/assets/icons/icon-\${iconType()}.svg\`" class="icon" alt="key" />
        </div>
        <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
        <div class="agenda-item__col">
          <h3 class="agenda-item__title">{{this.titleType()}}</h3>         
            <p v-if="agendaItem.type ==='talk'" class="agenda-item__talk">
              <span>{{agendaItem.speaker}}</span>
              <span class="agenda-item__dot"></span>
              <span class="agenda-item__lang">{{agendaItem.language}}</span>
            </p>         
          <p v-if="agendaItem.description!=''">{{agendaItem.description}}</p>
        </div>
      </div>` ,
});

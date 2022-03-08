import Vue from 'vue';
import BaseInput from '@/components/Inputs/BaseInput.vue';
import BaseDropdown from '@/components/BaseDropdown.vue';
import Card from '@/components/Cards/Card.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseCheckbox from '@/components/Inputs/BaseCheckbox.vue';
import {
  Input, InputNumber, Tooltip, Popover,
} from 'element-ui';
import BaseModalInput from '@/components/Inputs/BaseModalInput.vue';
import BaseModalDatePicker from '@/components/Inputs/BaseModalDatePicker.vue';
import BaseRadio from '@/components/Inputs/BaseRadio.vue';
import BaseModalContainer from '~/components/BaseModalContainer';
import BaseModalBox from '~/components/BaseModalBox';

Vue.component('BaseModalBox', BaseModalBox);
Vue.component('BaseModalContainer', BaseModalContainer);
Vue.component(BaseInput.name, BaseInput);
Vue.component(BaseRadio.name, BaseRadio);
Vue.component('BaseModalDatePicker', BaseModalDatePicker);
Vue.component(BaseModalInput.name, BaseModalInput);
Vue.component(BaseDropdown.name, BaseDropdown);
Vue.component(Card.name, Card);
Vue.component(BaseCheckbox.name, BaseCheckbox);
Vue.component(BaseButton.name, BaseButton);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);
Vue.use(Tooltip);
Vue.use(Popover);

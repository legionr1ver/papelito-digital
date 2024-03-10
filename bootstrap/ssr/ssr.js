import { mergeProps, useSSRContext, withCtx, createTextVNode, unref, toDisplayString, ref, computed, onMounted, onUnmounted, reactive, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { useForm, usePage, Link, createInertiaApp } from "@inertiajs/vue3";
import axios$1 from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faPenToSquare, faCircleXmark, faTrashCan, faEnvelope, faEnvelopeOpen, faBell, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft, faReceipt } from "@fortawesome/free-solid-svg-icons";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$s = {
  __name: "Input",
  __ssrInlineRender: true,
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        value: __props.modelValue,
        class: "w-full p-2 border border-[rgb(225, 227, 230)] accent-primary"
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Input.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$r = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<label${ssrRenderAttrs(mergeProps({ class: "text-gray-400 text-md" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</label>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Label.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Label = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$q = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "flex justify-center items-center bg-primary text-white py-2 px-6 rounded text-xl shadow-xl tracking-wider disabled:cursor-not-allowed disabled:opacity-70",
        disabled: __props.loading
      }, _attrs))}>`);
      if (__props.loading) {
        _push(`<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Button.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "danger",
      validator(value) {
        return ["success", "danger"].includes(value);
      }
    }
  },
  setup(__props) {
    const commonClasses = ["py-2", "px-3", "my-2", "border", "rounded"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.type === "danger") {
        _push(`<div class="${ssrRenderClass([commonClasses, "border-[rgb(241,_174,_181)] bg-[rgb(248,_215,_218)] text-[rgb(88,_21,_28)]"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.type === "success") {
        _push(`<div class="${ssrRenderClass([commonClasses, "border-[rgb(163,_207,_187)] bg-[rgb(209,_231,_221)] text-[rgb(10,_54,_34)]"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Alert.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      email: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center h-screen" }, _attrs))}><div class="max-w-[600px] border border-primary rounded-xl shadow-lg"><form class="p-10 grid gap-4"><div>`);
      _push(ssrRenderComponent(Label, { id: "email" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Email`);
          } else {
            return [
              createTextVNode("Email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        for: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "text",
        required: ""
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { id: "password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contraseña`);
          } else {
            return [
              createTextVNode("Contraseña")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        for: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        required: ""
      }, null, _parent));
      _push(`</div>`);
      if (unref(form).errors.email) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.email)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.email), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(form).errors.password) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.password)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.password), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$q, {
        loading: unref(form).processing,
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ingresar`);
          } else {
            return [
              createTextVNode("Ingresar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$o
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {
  __name: "Step1Information",
  __ssrInlineRender: true,
  props: [
    "item",
    "configurations",
    "page_step",
    "birthday_name",
    "birthday_age",
    "birthday_main_address",
    "birthday_secondary_address",
    "birthday_date",
    "birthday_from_time",
    "birthday_to_time",
    "observation",
    "contact_name",
    "contact_number",
    "high_priority",
    "map_ubication",
    "whatsapp_confirmation"
  ],
  emits: [
    "update:page_step",
    "update:birthday_name",
    "update:birthday_age",
    "update:birthday_main_address",
    "update:birthday_secondary_address",
    "update:birthday_date",
    "update:birthday_from_time",
    "update:birthday_to_time",
    "update:observation",
    "update:contact_name",
    "update:contact_number",
    "update:high_priority",
    "update:map_ubication",
    "update:whatsapp_confirmation"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const page = usePage();
    const confirmation = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="mb-5 space-y-8"><section><h2 class="text-2xl mb-5">¿En que formato voy a recibir la invitaión?</h2><ul class="mb-5 space-y-5"><li><strong>Invitación fija (estática):</strong> Formato PNG. </li><li><strong>Invitación interactiva (botones):</strong> Formato PDF.<br> Sirve para agregar botones con links a la Ubicación del evento (google maps) o botón de &quot;confirmación asistencia&quot; (a whatsapp). </li><li><strong>Invitación animada (video):</strong> Formato MP4.<br> Animación y musica de fondo, duran entre 20 y 30 seg. </li></ul></section><section><h2 class="text-2xl mb-5">Datos para la celebración</h2><div class="grid text-gray-400 space-y-5"><div class="grid"><label for="name"><div>Nombre del cumpleañero</div><small>Tal como quieras que figure en la tarjeta</small></label><input${ssrRenderAttr("value", __props.birthday_name)} class="p-2 border border-[rgb(225, 227, 230)]" id="name" type="text" placeholder="Ej: Nacho" required></div><div class="grid"><label for="edad"><div>Edad a cumplir</div><small>Solo si es necesario</small></label><input${ssrRenderAttr("value", __props.birthday_age)} class="p-2 border border-[rgb(225, 227, 230)]" id="edad" type="number" step="1" min="0" placeholder="Ej: 2"></div><div class="grid"><label for="direccion"><div>Dirección del evento</div></label><input${ssrRenderAttr("value", __props.birthday_main_address)} class="p-2 border border-[rgb(225, 227, 230)]" id="direccion" type="text" placeholder="Ej: Las Lilas 123, Barrio San Juan, Escobar" required></div><div class="grid"><label for="segunda_direccion"><div>Segunda dirección del evento</div><small>Para bautismos/confirmaciones/comuniones</small></label><input${ssrRenderAttr("value", __props.birthday_secondary_address)} class="p-2 border border-[rgb(225, 227, 230)]" id="segunda_direccion" type="text" placeholder="Ej: Parroquia Nuestra señora del Carmen,  Las Lilas 123, Escobar"></div><div class="grid"><label for="fecha"><div>Fecha del evento</div></label><input${ssrRenderAttr("value", __props.birthday_date)} class="p-2 border border-[rgb(225, 227, 230)]" id="fecha" type="date" required></div><div class="grid grid-cols-2"><div><label for="desde" class="me-5">Desde</label><input${ssrRenderAttr("value", __props.birthday_from_time)} class="p-2 border border-[rgb(225, 227, 230)]" id="desde" type="time"></div><div><label for="hasta" class="me-5">Hasta</label><input${ssrRenderAttr("value", __props.birthday_to_time)} class="p-2 border border-[rgb(225, 227, 230)]" id="hasta" type="time"></div></div><div class="grid"><label for="comentarios"><div>Comentarios</div><small>Cualquier frase que quieras incluir en la invitación</small></label><textarea id="comentarios" class="p-2 border border-[rgb(225, 227, 230)]" placeholder="Ej: traer traje de baño, confirmar asistencia, te espero, etc" rows="4">${ssrInterpolate(__props.observation)}</textarea></div></div></section><section><h2 class="text-2xl mb-5">Información de contacto</h2><div class="text-gray-400 space-y-5"><div class="grid"><label for="nombre_contacto"><div>Nombre</div></label><input${ssrRenderAttr("value", __props.contact_name)} class="p-2 border border-[rgb(225, 227, 230)]" id="nombre_contacto" type="text" required></div><div class="grid"><label for="telefono_contacto"><div>Teléfono</div></label><input${ssrRenderAttr("value", __props.contact_number)} class="p-2 border border-[rgb(225, 227, 230)]" id="nombre_contacto" type="text" required></div></div></section><section><h2 class="text-2xl mb-5">Confirmación</h2><div class="grid"><p class="mb-2"> Una vez realizada la invitación solo se podrá hacer cambios una cantidad limitada de veces. Por favor verificar que los datos ingresados sean correctos. </p><div class="flex items-center text-xl"><input${ssrIncludeBooleanAttr(Array.isArray(confirmation.value) ? ssrLooseContain(confirmation.value, null) : confirmation.value) ? " checked" : ""} id="confirmacion" type="checkbox" class="m-2 accent-primary"><label for="confirmacion" class="grid"><strong>¡Confirmo que los datos ingresados son correctos!</strong><span class="text-sm text-red-600 font-semibold">Requerido</span></label></div></div></section><section><h2 class="text-2xl mb-5">Extras</h2><ul><li class="flex items-center"><input${ssrIncludeBooleanAttr(__props.high_priority) ? " checked" : ""} id="urgente" type="checkbox" class="m-2 accent-primary"><label for="urgente">+${ssrInterpolate(unref(page).props.currency.label)} ${ssrInterpolate(props.configurations.get(`high_priority_price_${unref(page).props.currency.code}`))} Elaboración en menos de 24hs. <strong>¡Urgente!</strong></label></li>`);
      if (__props.item.type_id == 1) {
        _push(`<!--[--><li class="flex items-center"><input${ssrIncludeBooleanAttr(__props.whatsapp_confirmation) ? " checked" : ""} id="add-whatsapp-confirmation" type="checkbox" class="m-2 accent-primary"><label for="add-whatsapp-confirmation">+${ssrInterpolate(unref(page).props.currency.label)} ${ssrInterpolate(props.configurations.get(`whatsapp_confirmation_price_${unref(page).props.currency.code}`))} Agregar confirmación de asistencia por whatsapp.</label></li><li class="flex items-center"><input${ssrIncludeBooleanAttr(__props.map_ubication) ? " checked" : ""} id="map-confirmation" type="checkbox" class="m-2 accent-primary"><label for="map-confirmation">+${ssrInterpolate(unref(page).props.currency.label)} ${ssrInterpolate(props.configurations.get(`map_ubication_price_${unref(page).props.currency.code}`))} Agregar ubicación en el mapa.</label></li><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></section></div><div class="grid grid-cols-2 gap-2 my-2">`);
      _push(ssrRenderComponent(_sfc_main$q, {
        type: "buttom",
        disabled: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Volver`);
          } else {
            return [
              createTextVNode("Volver")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$q, {
        type: "submit",
        disabled: !confirmation.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Siguiente`);
          } else {
            return [
              createTextVNode("Siguiente")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Partials/Step1Information.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
  __name: "Step2PayMentMethodSelection",
  __ssrInlineRender: true,
  props: [
    "page_step",
    "payment_method"
  ],
  emits: [
    "update:page_step",
    "update:payment_method"
  ],
  setup(__props) {
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({
        id: "payment-method-selection-step-form",
        class: "mb-5"
      }, _attrs))}><h2 class="text-2xl mb-5">Seleccione el medio de pago </h2><section class="mb-5 grid gap-3 auto-rows-[100px]"><label for="payment-method-transferencia" class="cursor-pointer flex items-center p-3 border border-primary rounded"><input id="payment-method-transferencia"${ssrIncludeBooleanAttr(__props.payment_method == "transferencia") ? " checked" : ""} class="mx-2" type="radio" name="payment_method" value="transferencia"${ssrIncludeBooleanAttr(unref(page).props.currency.code !== "ars") ? " disabled" : ""}><div class="p-2 flex items-center"><h3 class="me-2">Transferencia</h3><small class="text-primary font-bold">($)</small></div><img class="w-16 p-2" src="/assets/images/icons/bank-transfer.webp"><div class="p-2 ms-auto font-bold">Descuento 10%</div></label><label for="payment-method-mercadopago" class="cursor-pointer flex items-center p-3 border border-primary rounded"><input id="payment-method-mercadopago"${ssrIncludeBooleanAttr(__props.payment_method == "mercadopago") ? " checked" : ""} class="mx-2" type="radio" name="payment_method" value="mercadopago"${ssrIncludeBooleanAttr(unref(page).props.currency.code !== "ars") ? " disabled" : ""}><div class="p-2 flex items-center"><h3 class="me-2">Mercado pago</h3><small class="text-primary font-bold">($)</small></div><img class="w-24 p-2" src="/assets/images/cards/mercadopago.webp"><div class="p-2 ms-auto font-bold">Sin descuento</div></label><label for="payment-method-paypal" class="cursor-pointer flex items-center p-3 border border-primary rounded"><input id="payment-method-paypal"${ssrIncludeBooleanAttr(__props.payment_method == "paypal") ? " checked" : ""} class="mx-2" type="radio" name="payment_method" value="paypal"${ssrIncludeBooleanAttr(unref(page).props.currency.code !== "usd") ? " disabled" : ""}><div class="p-2 flex items-center"><h3 class="me-2">Paypal</h3><small class="text-primary font-bold">(USD)</small></div><img class="w-28 p-2" src="/assets/images/cards/paypal-logo.webp"><div class="p-2 ms-auto font-bold">Sin descuento</div></label></section><div class="grid grid-cols-2 gap-2 my-2">`);
      _push(ssrRenderComponent(_sfc_main$q, {
        type: "button",
        onClick: ($event) => _ctx.$emit("update:page_step", 1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Volver`);
          } else {
            return [
              createTextVNode("Volver")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$q, {
        type: "submit",
        disabled: __props.payment_method == ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Siguiente`);
          } else {
            return [
              createTextVNode("Siguiente")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Partials/Step2PayMentMethodSelection.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$m
}, Symbol.toStringTag, { value: "Module" }));
const Step3Confirmation_vue_vue_type_style_index_0_scoped_22d45d77_lang = "";
const _sfc_main$l = {
  __name: "Step3Confirmation",
  __ssrInlineRender: true,
  props: [
    "page_step",
    "item",
    "configurations",
    "form"
  ],
  emits: [
    "update:page_step"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const page = usePage();
    const currency = page.props.currency.code;
    const finalPrice = computed(() => {
      let price = props.item[`${currency}_price`];
      if (props.form.high_priority)
        price += props.configurations.get(`high_priority_price_${currency}`);
      if (props.form.map_ubication)
        price += props.configurations.get(`map_ubication_price_${currency}`);
      if (props.form.whatsapp_confirmation)
        price += props.configurations.get(`whatsapp_confirmation_price_${currency}`);
      if (props.form.payment_method === "transferencia")
        price *= 0.9;
      return Math.floor(price);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section id="resumen" data-v-22d45d77><h2 class="text-2xl mb-5" data-v-22d45d77>Resumen de la compra</h2><ul class="space-y-5" data-v-22d45d77><li data-v-22d45d77><span data-v-22d45d77>Precio de la invitacion</span><span class="font-bold" data-v-22d45d77>+${ssrInterpolate(unref(page).props.currency.label)} ${ssrInterpolate(__props.item[`${unref(currency)}_price`])}</span></li>`);
      if (__props.form.high_priority) {
        _push(`<li data-v-22d45d77><span data-v-22d45d77>Elaboración en menos de 24hs</span><span class="font-bold" data-v-22d45d77>+${ssrInterpolate(unref(page).props.currency.label)} ${ssrInterpolate(__props.configurations.get(`high_priority_price_${unref(currency)}`))}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.form.whatsapp_confirmation) {
        _push(`<li data-v-22d45d77><span data-v-22d45d77>Confirmación de asistencia</span><span class="font-bold" data-v-22d45d77>+${ssrInterpolate(unref(page).props.currency.label)} ${ssrInterpolate(__props.configurations.get(`whatsapp_confirmation_price_${unref(currency)}`))}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.form.map_ubication) {
        _push(`<li data-v-22d45d77><span data-v-22d45d77>Ubicación en el mapa</span><span class="font-bold" data-v-22d45d77>+${ssrInterpolate(unref(page).props.currency.label)} ${ssrInterpolate(__props.configurations.get(`map_ubication_price_${unref(currency)}`))}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.form.payment_method == "transferencia") {
        _push(`<li data-v-22d45d77><span data-v-22d45d77>Descuento por transferencia</span><span class="font-bold" data-v-22d45d77>-10%</span></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li data-v-22d45d77><span data-v-22d45d77>Total</span><span class="font-bold" data-v-22d45d77>${ssrInterpolate(unref(page).props.currency.label)} ${ssrInterpolate(finalPrice.value)}</span></li></ul></section><div class="grid grid-cols-2 gap-2 my-2" data-v-22d45d77>`);
      _push(ssrRenderComponent(_sfc_main$q, {
        type: "button",
        onClick: ($event) => _ctx.$emit("update:page_step", __props.page_step - 1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Volver`);
          } else {
            return [
              createTextVNode("Volver")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$q, {
        type: "button",
        onClick: ($event) => _ctx.$emit("update:page_step", __props.page_step + 1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Confirmar`);
          } else {
            return [
              createTextVNode("Confirmar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Partials/Step3Confirmation.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Step3Confirmation = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-22d45d77"]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Step3Confirmation
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  __name: "Step4OrderCreation",
  __ssrInlineRender: true,
  props: [
    "form",
    "item"
  ],
  emits: [
    "order-created"
  ],
  setup(__props, { emit: emits }) {
    const props = __props;
    const possibleStatus = {
      LOADING: Symbol("loading"),
      ERROR: Symbol("error")
    };
    const status = ref(possibleStatus.LOADING);
    async function createOrder() {
      try {
        status.value = possibleStatus.LOADING;
        const response = await axios.post("/order", {
          item_id: props.item.id,
          ...props.form
        });
        emits("order-created", response.data);
      } catch (error2) {
        status.value = possibleStatus.ERROR;
      }
    }
    onMounted(createOrder);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (status.value === possibleStatus.LOADING) {
        _push(`<div class="flex justify-center items-center p-5"><svg class="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      if (status.value === possibleStatus.ERROR) {
        _push(`<div class="flex justify-center items-center"><div><img class="max-w-[200px] mx-auto" src="/assets/images/stickers/ocurrio-un-error.webp" alt="Ocurrio un error"><div>`);
        _push(ssrRenderComponent(_sfc_main$q, {
          onClick: createOrder,
          class: "m-5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Volver a intentar`);
            } else {
              return [
                createTextVNode("Volver a intentar")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Partials/Step4OrderCreation.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  __name: "Transfer",
  __ssrInlineRender: true,
  props: [
    "order"
  ],
  setup(__props) {
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="py-4"><h2 class="text-2xl mb-2">Pago por transferencia</h2><p class="py-1"> Por favor luego de realizar la transferencia envianos el comprobante por whatsapp a <a class="underline text-primary" href="tel:+549111521664157">+54 9 11 2166 4157</a> o por mail a <a class="underline text-primary" href="mailto:contacto@papelitodigital.com.ar">contacto@papelitodigital.com.ar</a></p><p class="py-1"> El monto a abonar es de <strong class="text-xl p-2">${ssrInterpolate(unref(page).props.currency.label)} ${ssrInterpolate(__props.order.price)}</strong></p></div><div class="py-4"><h2 class="text-2xl mb-2">Información de cuenta</h2><div class="divide-y-2"><div class="flex p-2"><span class="flex-initial">CBU</span><strong class="ms-auto flex-initial">0720071788000017486868</strong></div><div class="flex p-2"><span class="flex-initial">Alias</span><strong class="ms-auto flex-initial">PAPELITO.DIGITAL</strong></div><div class="flex p-2"><span class="flex-initial">Titular de cuenta</span><strong class="ms-auto flex-initial">Silvero Gabriela Giselle</strong></div></div></div></div>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Partials/Payments/Transfer.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  __name: "Paypal",
  __ssrInlineRender: true,
  props: [
    "order",
    "paypal_client_id"
  ],
  setup(__props) {
    const props = __props;
    const STATES = {
      LOADING: Symbol("LOADING"),
      READY: Symbol("READY"),
      SUCCESS: Symbol("SUCCESS"),
      ERROR: Symbol("ERROR")
    };
    const state = ref(STATES.LOADING);
    onMounted(() => {
      const el = document.createElement("script");
      el.onload = () => {
        state.value = STATES.READY;
        window.paypal.Buttons({
          async createOrder() {
            try {
              const response = await axios.post(`/paypal-payment/${props.order.id}/create`);
              return response.data;
            } catch (error2) {
              state.value = STATES.ERROR;
            }
          },
          async onApprove(data, actions) {
            var _a;
            try {
              state.value = STATES.LOADING;
              const response = await axios.post(`/paypal-payment/${props.order.id}/capture`, {
                paypal_order_id: data.orderID
              });
              const orderData = response.data;
              const errorDetail = (_a = orderData == null ? void 0 : orderData.details) == null ? void 0 : _a[0];
              if ((errorDetail == null ? void 0 : errorDetail.issue) === "INSTRUMENT_DECLINED") {
                return actions.restart();
              } else if (errorDetail) {
                throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
              } else if (!orderData.purchase_units) {
                throw new Error(JSON.stringify(orderData));
              } else {
                state.value = STATES.SUCCESS;
              }
            } catch (error2) {
              state.value = STATES.ERROR;
            }
          }
        }).render("#paypal-buttons");
      };
      el.onerror = () => error.value = true;
      document.head.appendChild(el);
      el.src = `https://www.paypal.com/sdk/js?client-id=${props.paypal_client_id}&currency=USD`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(state.value === STATES.LOADING ? null : { display: "none" })}" class="flex justify-center items-center p-5"><svg class="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div><div style="${ssrRenderStyle(state.value === STATES.READY ? null : { display: "none" })}" id="paypal-buttons"></div><div style="${ssrRenderStyle(state.value === STATES.ERROR ? null : { display: "none" })}" class="flex justify-center items-center"><div><img class="max-w-[200px] mx-auto" src="/assets/images/stickers/ocurrio-un-error.webp" alt="Ocurrio un error"><p class="text-center text-primary font-bold p-10">Ocurrió un error al preparar el pago, vuelva a intentarlo en unos momentos.</p></div></div><div style="${ssrRenderStyle(state.value === STATES.SUCCESS ? null : { display: "none" })}" class="flex justify-center items-center"><div><img class="max-w-[200px] mx-auto mb-5" src="/assets/images/stickers/pago-confirmado.webp" alt="Pago confirmado"><div class="text-center"><h3 class="text-primary font-bold text-3xl mb-2 font-serif">Pago realizado con éxito!</h3><p class="">Nos contactaremos a la brevedad para enviarle su pedido.</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Partials/Payments/Paypal.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  __name: "Mercadopago",
  __ssrInlineRender: true,
  props: [
    "order",
    "mercadopago_public_key"
  ],
  setup(__props) {
    const props = __props;
    const STATES = {
      LOADING: Symbol("LOADING"),
      READY: Symbol("READY"),
      SUCCESS: Symbol("SUCCESS"),
      ERROR: Symbol("ERROR")
    };
    const state = ref(STATES.LOADING);
    async function createPreference() {
      const response = await axios$1.post(`/mercadopago-payment/${props.order.id}/preference`);
      return response.data;
    }
    onMounted(() => {
      const el = document.createElement("script");
      el.onload = async () => {
        try {
          const preferenceId = await createPreference();
          const mp = new MercadoPago(props.mercadopago_public_key);
          window.paymentBrickController = await mp.bricks().create(
            "payment",
            "mercadopago-buttons",
            {
              initialization: {
                /*
                 "amount" es el monto total a pagar por todos los medios de pago con excepción de la Cuenta de Mercado Pago y Cuotas sin tarjeta de crédito, las cuales tienen su valor de procesamiento determinado en el backend a través del "preferenceId"
                */
                amount: props.order.price,
                preferenceId
              },
              customization: {
                paymentMethods: {
                  creditCard: "all",
                  debitCard: "all"
                  /*mercadoPago: "all",*/
                }
              },
              callbacks: {
                onReady: () => state.value = STATES.READY,
                onSubmit: async ({ selectedPaymentMethod, formData }) => {
                  try {
                    state.value = STATES.LOADING;
                    const response = await axios$1.post(`/mercadopago-payment/${props.order.id}/payment`, formData);
                    state.value = STATES.SUCCESS;
                  } catch (error2) {
                    state.value = STATES.ERROR;
                  }
                },
                onError: (error2) => {
                  state.value = STATES.ERROR;
                }
              }
            }
          );
        } catch (error2) {
          state.value = STATES.ERROR;
        }
      };
      el.onerror = () => state.value = STATES.ERROR;
      document.head.appendChild(el);
      el.src = "https://sdk.mercadopago.com/js/v2";
    });
    onUnmounted(() => {
      var _a;
      return (_a = window.paymentBrickController) == null ? void 0 : _a.unmount();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(state.value === STATES.LOADING ? null : { display: "none" })}" class="flex justify-center items-center p-5"><svg class="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div><div style="${ssrRenderStyle(state.value === STATES.READY ? null : { display: "none" })}" id="mercadopago-buttons"></div><div style="${ssrRenderStyle(state.value === STATES.ERROR ? null : { display: "none" })}" class="flex justify-center items-center"><div><img class="max-w-[200px] mx-auto" src="/assets/images/stickers/ocurrio-un-error.webp" alt="Ocurrio un error"><p class="text-center text-primary font-bold p-10">Ocurrió un error al preparar el pago, vuelva a intentarlo en unos momentos.</p></div></div><div style="${ssrRenderStyle(state.value === STATES.SUCCESS ? null : { display: "none" })}" class="flex justify-center items-center"><div><img class="max-w-[200px] mx-auto mb-5" src="/assets/images/stickers/pago-confirmado.webp" alt="Pago confirmado"><div class="text-center"><h3 class="text-primary font-bold text-3xl mb-2 font-serif">Pago realizado con éxito!</h3><p class="">Nos contactaremos a la brevedad para enviarle su pedido.</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Partials/Payments/Mercadopago.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "Step5Payment",
  __ssrInlineRender: true,
  props: {
    paypal_client_id: {
      type: String,
      required: true
    },
    mercadopago_public_key: {
      type: String,
      required: true
    },
    order: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5" }, _attrs))}>`);
      if (props.order.payment_method === "transferencia") {
        _push(ssrRenderComponent(_sfc_main$j, { order: __props.order }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.order.payment_method === "paypal") {
        _push(ssrRenderComponent(_sfc_main$i, {
          order: __props.order,
          paypal_client_id: __props.paypal_client_id
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.order.payment_method === "mercadopago") {
        _push(ssrRenderComponent(_sfc_main$h, {
          order: __props.order,
          mercadopago_public_key: __props.mercadopago_public_key
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Partials/Step5Payment.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const GuestLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_main$f = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    usePage();
    const search = reactive({
      type: "",
      search: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="shadow-md mb-6"><div id="top" class="bg-secondary text-center text-white p-2 text-xl"><p class="font-serif">Envíos gratis por E-mail o Whatsapp</p></div><div class="max-w-[1200px] mx-auto flex px-2"><div class="flex-initial flex items-center">`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="max-w-[5rem] lg:max-w-[7rem] mx-auto p-3" src="/assets/images/logo.png" alt="Logo Papelito Digital"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "max-w-[5rem] lg:max-w-[7rem] mx-auto p-3",
                src: "/assets/images/logo.png",
                alt: "Logo Papelito Digital"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-1 grid items-center"><div class="flex"><form id="search" class="flex-1 p-2 flex text-sm text-gray-400"><select class="hidden lg:block p-3 border border-[rgb(225, 227, 230)]" aria-label="Tipo de invitacion"><option value="">Todas</option><option value="1">Fijas</option><option value="2">Animadas</option></select><button type="submit" class="border-s p-3 border-t border-b border-[rgb(225, 227, 230)]" aria-label="Buscar"><svg class="aa-SubmitIcon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></svg></button><input${ssrRenderAttr("value", search.search)} class="p-3 border-t border-e border-b border-[rgb(225, 227, 230)] w-full" name="search" type="search" placeholder="Busca invitaciones por tema"></form><div class="flex justify-center items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "bg-primary py-1 px-2 text-xs rounded text-white font-bold me-3",
        href: "/currency/ars"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ARS`);
          } else {
            return [
              createTextVNode("ARS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: "bg-primary py-1 px-2 text-xs rounded text-white font-bold",
        href: "/currency/usd"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`U$D`);
          } else {
            return [
              createTextVNode("U$D")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><nav class="hidden lg:grid grid-cols-[1fr_auto] items-center"><ul class="grid grid-flow-col justify-evenly py-4 text-primary font-serif text-xl">`);
      _push(ssrRenderComponent(unref(Link), {
        as: "li",
        class: "relative flex items-center cursor-pointer group",
        href: "/gallery",
        data: { slug: "cumpleanos" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Cumpleaños</span><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full"${_scopeId}></div>`);
          } else {
            return [
              createVNode("span", null, "Cumpleaños"),
              createVNode("div", { class: "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        as: "li",
        class: "relative flex items-center cursor-pointer group",
        href: "/gallery",
        data: { slug: "casamientos" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Casamientos</span><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full"${_scopeId}></div>`);
          } else {
            return [
              createVNode("span", null, "Casamientos"),
              createVNode("div", { class: "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        as: "li",
        class: "relative flex items-center cursor-pointer group",
        href: "/gallery",
        data: { slug: "bautismos" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Bautismos</span><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full"${_scopeId}></div>`);
          } else {
            return [
              createVNode("span", null, "Bautismos"),
              createVNode("div", { class: "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        as: "li",
        class: "relative flex items-center cursor-pointer group",
        href: "/gallery",
        data: { slug: "comuniones" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Comuniones</span><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full"${_scopeId}></div>`);
          } else {
            return [
              createVNode("span", null, "Comuniones"),
              createVNode("div", { class: "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        as: "li",
        class: "relative flex items-center cursor-pointer group",
        href: "/gallery",
        data: { slug: "baby-showers" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Baby<br${_scopeId}>Showers</span><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full"${_scopeId}></div>`);
          } else {
            return [
              createVNode("span", null, [
                createTextVNode("Baby"),
                createVNode("br"),
                createTextVNode("Showers")
              ]),
              createVNode("div", { class: "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        as: "li",
        class: "relative flex items-center cursor-pointer group",
        href: "/gallery",
        data: { slug: "fechas-especiales" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Fechas<br${_scopeId}>Especiales</span><div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full"${_scopeId}></div>`);
          } else {
            return [
              createVNode("span", null, [
                createTextVNode("Fechas"),
                createVNode("br"),
                createTextVNode("Especiales")
              ]),
              createVNode("div", { class: "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all group-hover:w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ul>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "bg-primary text-white font-bold py-2 px-4 rounded shadow-xl",
        href: "/preguntas"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Info Importante`);
          } else {
            return [
              createTextVNode("Info Importante")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></div></header><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer><a href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&amp;app_absent=0" target="_blank" class="fixed bottom-5 right-5 shadow-xl rounded-full"><img class="w-[60px] h-[60px]" src="/assets/images/icons/whatsapp.webp" alt="Whats App"></a><div><img class="max-w-[320px] mx-auto" src="/assets/images/logo.png" alt="Logo Papelito Digital"></div><div class="bg-secondary p-5"><div class="max-w-[1200px] mx-auto p-5 grid lg:grid-cols-4 gap-3"><div><h4 class="text-lg font-bold pt-5 pb-2">Navegación</h4><ul class="grid grid-cols-2 lg:block"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { tag: 1 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cumpleaños`);
          } else {
            return [
              createTextVNode("Cumpleaños")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { tag: 2 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Bodas`);
          } else {
            return [
              createTextVNode("Bodas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { tag: 3 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Bautismos`);
          } else {
            return [
              createTextVNode("Bautismos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { tag: 4 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Comuniones Confirmaciones`);
          } else {
            return [
              createTextVNode("Comuniones Confirmaciones")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { tag: 5 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Baby Shower`);
          } else {
            return [
              createTextVNode("Baby Shower")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { tag: 6 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fechas Especiales`);
          } else {
            return [
              createTextVNode("Fechas Especiales")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h4 class="text-lg font-bold pt-5 pb-2">Medios de Pago</h4><ul><img class="inline-block w-12 p-1" src="/assets/images/cards/visa.webp" alt="Tarjeta Visa"><img class="inline-block w-12 p-1" src="/assets/images/cards/mastercard.webp" alt="Tarjeta Mastercard"><img class="inline-block w-12 p-1" src="/assets/images/cards/amex.webp" alt="Tarjeta American Express"><img class="inline-block w-12 p-1" src="/assets/images/cards/tarjeta-naranja.webp" alt="Tarjeta Naranja"><img class="inline-block w-12 p-1" src="/assets/images/cards/cabal.webp" alt="Tarjeta Cabal"><img class="inline-block w-12 p-1" src="/assets/images/cards/mercadopago.webp" alt="Mercado pago"><img class="inline-block w-12 p-1" src="/assets/images/icons/bank-transfer.webp" alt="Transferencia bancaria"></ul></div><div><h4 class="text-lg font-bold pt-5 pb-2">Contactanos</h4><ul><li><a class="flex items-center" href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&amp;app_absent=0" target="_blank"><img class="w-5 h-5 me-2" src="/assets/images/icons/whatsapp.webp" alt="Whats App"><span>+54 9 11 2166 4157</span></a></li><li><a class="flex items-center" href="mailto:contacto@papelitodigital.com.ar"><img class="w-5 h-5 me-2" src="/assets/images/icons/mail.webp" alt="Email"><span>contacto@papelitodigital.com.ar</span></a></li></ul></div><div><section><h4 class="text-lg font-bold pt-5 pb-2">Redes Sociales</h4><ul class="flex"><li><a href="https://www.facebook.com/papelitodigital.ar" target="_blank"><img class="w-10 p-2" src="/assets/images/icons/facebook.webp" alt="Facebook"></a></li><li><a href="https://www.instagram.com/papelitodigital.ar" target="_blank"><img class="w-10 p-2" src="/assets/images/icons/instagram.webp" alt="Instagram"></a></li><li><a href="https://ar.pinterest.com/Papelitodigital" target="_blank"><img class="w-10 p-2" src="/assets/images/icons/pinterest.webp" alt="Pinterest"></a></li><li><a href="https://www.tiktok.com/@papelitodigital?is_from_webapp=1&amp;sender_device=pc" target="_blank"><img class="w-10 p-2" src="/assets/images/icons/tiktok.webp" alt="TikTok"></a></li><li><a href="https://www.youtube.com/@papelitodigital" target="_blank"><img class="w-10 p-2" src="/assets/images/icons/youtube.webp" alt="Youtube"></a></li></ul></section><section><h4 class="text-lg pt-5 pb-2">Suscribite y enterate de las novedades!</h4><form class="grid grid-cols-[1fr_auto]"><input class="p-1 border-t border-s border-b border-[rgb(225, 227, 230)]" type="email" aria-label="Suscribir email" required><button class="bg-primary text-white p-2 rounded-tr-md rounded-br-md" type="submit" aria-label="Suscribir"><svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg></button></form></section></div></div></div></footer><!--]-->`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __default__$9 = {
  layout: _sfc_main$f
};
const _sfc_main$e = /* @__PURE__ */ Object.assign(__default__$9, {
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    previous_url: {
      type: String,
      required: true
    },
    configurations: {
      type: Object,
      required: true
    },
    paypal_client_id: {
      type: String,
      required: true
    },
    mercadopago_public_key: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const selected = ref(props.item.files[0].id);
    const page_step = ref(1);
    const order = ref(null);
    const form = reactive({
      birthday_name: "",
      birthday_age: "",
      birthday_main_address: "",
      birthday_secondary_address: "",
      birthday_date: "",
      birthday_from_time: "",
      birthday_to_time: "",
      observation: "",
      contact_name: "",
      contact_number: "",
      high_priority: false,
      map_ubication: false,
      whatsapp_confirmation: false,
      payment_method: "",
      currency: page.props.currency.code
    });
    const configurationsMap = computed(() => {
      return new Map(props.configurations.map((c) => [c.variable, parseInt(c.value)]));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[1200px] mx-auto mb-16 grid md:grid-cols-2" }, _attrs))}><div class="grid grid-cols-[100px_1fr] gap-3"><ul class="space-y-4"><!--[-->`);
      ssrRenderList(__props.item.files, (file) => {
        _push(`<li class="border border-primary rounded hover:outline cursor-pointer">`);
        if (file.mime.startsWith("image/")) {
          _push(`<img class="max-w-full"${ssrRenderAttr("src", `/file/${file.id}`)}${ssrRenderAttr("alt", `Imagen de l artículo ${__props.item.title}`)}>`);
        } else {
          _push(`<!---->`);
        }
        if (file.mime.startsWith("video/")) {
          _push(`<video class="max-w-full"${ssrRenderAttr("src", `/file/${file.id}`)}> No se puede reproducir video </video>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><ul><!--[-->`);
      ssrRenderList(__props.item.files, (file) => {
        _push(`<li><div style="${ssrRenderStyle(selected.value === file.id ? null : { display: "none" })}" class="flex items-center justify-center">`);
        if (file.mime.startsWith("image/")) {
          _push(`<img${ssrRenderAttr("src", `/file/${file.id}`)}${ssrRenderAttr("alt", `Imagen de l artículo ${__props.item.title}`)}>`);
        } else {
          _push(`<!---->`);
        }
        if (file.mime.startsWith("video/")) {
          _push(`<video${ssrRenderAttr("src", `/file/${file.id}`)} controls> No se puede reproducir video </video>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div><div class="p-5"><header class="pb-10 grid">`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.previous_url,
        class: "text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Volver a galeria`);
          } else {
            return [
              createTextVNode("Volver a galeria")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="text-5xl text-primary font-serif">${ssrInterpolate(__props.item.title)}</h2></header><div>`);
      if (page_step.value === 1) {
        _push(ssrRenderComponent(_sfc_main$n, {
          item: props.item,
          configurations: configurationsMap.value,
          page_step: page_step.value,
          "onUpdate:page_step": ($event) => page_step.value = $event,
          birthday_name: form.birthday_name,
          "onUpdate:birthday_name": ($event) => form.birthday_name = $event,
          birthday_age: form.birthday_age,
          "onUpdate:birthday_age": ($event) => form.birthday_age = $event,
          birthday_main_address: form.birthday_main_address,
          "onUpdate:birthday_main_address": ($event) => form.birthday_main_address = $event,
          birthday_secondary_address: form.birthday_secondary_address,
          "onUpdate:birthday_secondary_address": ($event) => form.birthday_secondary_address = $event,
          birthday_date: form.birthday_date,
          "onUpdate:birthday_date": ($event) => form.birthday_date = $event,
          birthday_from_time: form.birthday_from_time,
          "onUpdate:birthday_from_time": ($event) => form.birthday_from_time = $event,
          birthday_to_time: form.birthday_to_time,
          "onUpdate:birthday_to_time": ($event) => form.birthday_to_time = $event,
          observation: form.observation,
          "onUpdate:observation": ($event) => form.observation = $event,
          contact_name: form.contact_name,
          "onUpdate:contact_name": ($event) => form.contact_name = $event,
          contact_number: form.contact_number,
          "onUpdate:contact_number": ($event) => form.contact_number = $event,
          high_priority: form.high_priority,
          "onUpdate:high_priority": ($event) => form.high_priority = $event,
          map_ubication: form.map_ubication,
          "onUpdate:map_ubication": ($event) => form.map_ubication = $event,
          whatsapp_confirmation: form.whatsapp_confirmation,
          "onUpdate:whatsapp_confirmation": ($event) => form.whatsapp_confirmation = $event
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (page_step.value === 2) {
        _push(ssrRenderComponent(_sfc_main$m, {
          page_step: page_step.value,
          "onUpdate:page_step": ($event) => page_step.value = $event,
          payment_method: form.payment_method,
          "onUpdate:payment_method": ($event) => form.payment_method = $event
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (page_step.value === 3) {
        _push(ssrRenderComponent(Step3Confirmation, {
          page_step: page_step.value,
          "onUpdate:page_step": ($event) => page_step.value = $event,
          item: __props.item,
          configurations: configurationsMap.value,
          form
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (page_step.value === 4) {
        _push(ssrRenderComponent(_sfc_main$k, {
          form,
          item: __props.item,
          onOrderCreated: (newOrder) => {
            order.value = newOrder;
            page_step.value++;
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (page_step.value === 5) {
        _push(ssrRenderComponent(_sfc_main$g, {
          order: order.value,
          mercadopago_public_key: __props.mercadopago_public_key,
          paypal_client_id: __props.paypal_client_id
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Item.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(faUser);
    const sideBarOpen = ref(false);
    const dropDownOpen = ref(false);
    const page = usePage();
    const notifications = page.props.auth.notifications;
    const user = page.props.auth.user;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "leading-normal tracking-normal",
        id: "main-body"
      }, _attrs))}><div class="flex flex-wrap"><div class="${ssrRenderClass([sideBarOpen.value ? "" : "hidden", "w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30"])}" id="main-nav"><div class="w-full h-20 border-b flex px-4 items-center mb-8"><p class="font-semibold text-3xl text-blue-400 pl-4">LOGO</p></div><div class="mb-4 px-4"><p class="pl-4 text-sm font-semibold mb-1">MAIN</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/dashboard",
        as: "div",
        class: [{ "bg-gray-200": _ctx.$page.component === "Dashboard" }, "w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20"${_scopeId}><path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"${_scopeId}></path></svg><span class="text-gray-700"${_scopeId}>Dashboard</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-6 w-6 fill-current mr-2",
                viewBox: "0 0 20 20"
              }, [
                createVNode("path", { d: "M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z" })
              ])),
              createVNode("span", { class: "text-gray-700" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"><svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20"><path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path></svg><span class="text-gray-700">Analytics</span></div><div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"><svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20"><path d="M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549 M8.786,4.74h2.428v0.809H8.786V4.74z M16.879,15.26H3.122v-4.046h5.665v1.201c0,0.223,0.182,0.404,0.405,0.404h1.618c0.222,0,0.405-0.182,0.405-0.404v-1.201h5.665V15.26z M9.595,9.583h0.81v2.428h-0.81V9.583zM16.879,10.405h-5.665V9.19c0-0.222-0.183-0.405-0.405-0.405H9.191c-0.223,0-0.405,0.183-0.405,0.405v1.215H3.122V6.358h13.757V10.405z"></path></svg><span class="text-gray-700">Inventory</span></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/notifications",
        as: "div",
        class: [{ "bg-gray-200": _ctx.$page.component === "Notifications/List" }, "w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="h-6 w-6 fill-current mr-2"${_scopeId}><path d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"${_scopeId}></path></svg><span class="text-gray-700"${_scopeId}>Notificaciones</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                class: "h-6 w-6 fill-current mr-2"
              }, [
                createVNode("path", {
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" })
              ])),
              createVNode("span", { class: "text-gray-700" }, "Notificaciones")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/order",
        as: "div",
        class: [{ "bg-gray-200": _ctx.$page.component === "Orders/Create" }, "w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20"${_scopeId}><path d="M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"${_scopeId}></path></svg><span class="text-gray-700"${_scopeId}>Pedidos</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-6 w-6 fill-current mr-2",
                viewBox: "0 0 20 20"
              }, [
                createVNode("path", { d: "M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z" })
              ])),
              createVNode("span", { class: "text-gray-700" }, "Pedidos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4 px-4"><p class="pl-4 text-sm font-semibold mb-1">ARTÍCULOS</p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/item/create",
        as: "div",
        class: [{ "bg-gray-200": _ctx.$page.component === "Item/Create" }, "w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20"${_scopeId}><path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"${_scopeId}></path></svg><span class="text-gray-700"${_scopeId}>Agregar</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-6 w-6 fill-current mr-2",
                viewBox: "0 0 20 20"
              }, [
                createVNode("path", { d: "M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10" })
              ])),
              createVNode("span", { class: "text-gray-700" }, "Agregar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/item",
        as: "div",
        class: [{ "bg-gray-200": _ctx.$page.component === "Item/List" }, "w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20"${_scopeId}><path d="M15.396,2.292H4.604c-0.212,0-0.385,0.174-0.385,0.386v14.646c0,0.212,0.173,0.385,0.385,0.385h10.792c0.211,0,0.385-0.173,0.385-0.385V2.677C15.781,2.465,15.607,2.292,15.396,2.292 M15.01,16.938H4.99v-2.698h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.519,1.156-1.156s-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.321-1.089,0.771H4.99v-3.083h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.518,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V6.531h1.609C6.755,6.98,7.185,7.302,7.688,7.302c0.638,0,1.156-0.519,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V3.062h10.02V16.938z M7.302,13.854c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386s-0.173,0.385-0.385,0.385S7.302,14.066,7.302,13.854 M7.302,10c0-0.212,0.173-0.385,0.385-0.385S8.073,9.788,8.073,10s-0.173,0.385-0.385,0.385S7.302,10.212,7.302,10 M7.302,6.146c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386S7.899,6.531,7.688,6.531S7.302,6.358,7.302,6.146"${_scopeId}></path></svg><span class="text-gray-700"${_scopeId}>Listar</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-6 w-6 fill-current mr-2",
                viewBox: "0 0 20 20"
              }, [
                createVNode("path", { d: "M15.396,2.292H4.604c-0.212,0-0.385,0.174-0.385,0.386v14.646c0,0.212,0.173,0.385,0.385,0.385h10.792c0.211,0,0.385-0.173,0.385-0.385V2.677C15.781,2.465,15.607,2.292,15.396,2.292 M15.01,16.938H4.99v-2.698h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.519,1.156-1.156s-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.321-1.089,0.771H4.99v-3.083h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.518,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V6.531h1.609C6.755,6.98,7.185,7.302,7.688,7.302c0.638,0,1.156-0.519,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V3.062h10.02V16.938z M7.302,13.854c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386s-0.173,0.385-0.385,0.385S7.302,14.066,7.302,13.854 M7.302,10c0-0.212,0.173-0.385,0.385-0.385S8.073,9.788,8.073,10s-0.173,0.385-0.385,0.385S7.302,10.212,7.302,10 M7.302,6.146c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386S7.899,6.531,7.688,6.531S7.302,6.358,7.302,6.146" })
              ])),
              createVNode("span", { class: "text-gray-700" }, "Listar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-4 px-4"><p class="pl-4 text-sm font-semibold mb-1">MISC</p><div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"><svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20"><path d="M17.592,8.936l-6.531-6.534c-0.593-0.631-0.751-0.245-0.751,0.056l0.002,2.999L5.427,9.075H2.491c-0.839,0-0.162,0.901-0.311,0.752l3.683,3.678l-3.081,3.108c-0.17,0.171-0.17,0.449,0,0.62c0.169,0.17,0.448,0.17,0.618,0l3.098-3.093l3.675,3.685c-0.099-0.099,0.773,0.474,0.773-0.296v-2.965l3.601-4.872l2.734-0.005C17.73,9.688,18.326,9.669,17.592,8.936 M3.534,9.904h1.906l4.659,4.66v1.906L3.534,9.904z M10.522,13.717L6.287,9.48l4.325-3.124l3.088,3.124L10.522,13.717z M14.335,8.845l-3.177-3.177V3.762l5.083,5.083H14.335z"></path></svg><span class="text-gray-700">Notices</span></div><div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"><svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20"><path d="M6.176,7.241V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.221,0-0.403,0.181-0.403,0.402v0.461C4.79,7.416,4.365,7.955,4.365,8.591c0,0.636,0.424,1.175,1.006,1.35v3.278c0,0.222,0.182,0.402,0.403,0.402c0.222,0,0.402-0.181,0.402-0.402V9.941c0.582-0.175,1.006-0.714,1.006-1.35C7.183,7.955,6.758,7.416,6.176,7.241 M5.774,9.195c-0.332,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C6.377,8.923,6.105,9.195,5.774,9.195 M10.402,10.058V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.222,0-0.402,0.181-0.402,0.402v3.278c-0.582,0.175-1.006,0.714-1.006,1.35c0,0.637,0.424,1.175,1.006,1.351v0.461c0,0.222,0.181,0.402,0.402,0.402c0.221,0,0.402-0.181,0.402-0.402v-0.461c0.582-0.176,1.006-0.714,1.006-1.351C11.408,10.772,10.984,10.233,10.402,10.058M10,12.013c-0.333,0-0.604-0.272-0.604-0.604S9.667,10.805,10,10.805c0.332,0,0.604,0.271,0.604,0.604S10.332,12.013,10,12.013M14.629,8.448V6.78c0-0.221-0.182-0.402-0.403-0.402c-0.221,0-0.402,0.181-0.402,0.402v1.668c-0.581,0.175-1.006,0.714-1.006,1.35c0,0.636,0.425,1.176,1.006,1.351v2.07c0,0.222,0.182,0.402,0.402,0.402c0.222,0,0.403-0.181,0.403-0.402v-2.07c0.581-0.175,1.006-0.715,1.006-1.351C15.635,9.163,15.21,8.624,14.629,8.448 M14.226,10.402c-0.331,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C14.83,10.13,14.558,10.402,14.226,10.402 M17.647,3.962H2.353c-0.221,0-0.402,0.181-0.402,0.402v11.27c0,0.222,0.181,0.402,0.402,0.402h15.295c0.222,0,0.402-0.181,0.402-0.402V4.365C18.05,4.144,17.869,3.962,17.647,3.962 M17.245,15.232H2.755V4.768h14.49V15.232z"></path></svg><span class="text-gray-700">Controls</span></div><div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"><svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20"><path d="M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812"></path></svg><span class="text-gray-700">Settings</span></div></div></div><div class="${ssrRenderClass([sideBarOpen.value ? "overlay" : "", "w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"])}" id="main-content"><div class="sticky top-0 z-40"><div class="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between"><div class="flex"><div class="inline-block lg:hidden flex items-center mr-4"><button class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"><svg class="h-5 w-5" style="${ssrRenderStyle({ fill: "black" })}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button></div><div class="relative text-gray-600"><input type="search" name="serch" placeholder="Search products..." class="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none"><button type="submit" class="absolute right-0 top-0 mt-3 mr-4"><svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="${ssrRenderStyle({ "enable-background": "new 0 0 56.966 56.966" })}" xml:space="preserve" width="512px" height="512px"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path></svg></button></div></div><div class="flex items-center relative">`);
      _push(ssrRenderComponent(unref(Link), {
        as: "button",
        href: "/notifications",
        class: "group relative mr-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="fill-current group-hover:text-blue-500"${_scopeId}><path d="M0 0h24v24H0z" fill="none"${_scopeId}></path><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"${_scopeId}></path></svg>`);
            if (unref(notifications).length > 0) {
              _push2(`<div class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                class: "fill-current group-hover:text-blue-500"
              }, [
                createVNode("path", {
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createVNode("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" })
              ])),
              unref(notifications).length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img src="https://a7sas.net/wp-content/uploads/2019/07/4060.jpeg" class="w-12 h-12 rounded-full shadow-lg"></div></div><div class="${ssrRenderClass([dropDownOpen.value ? "" : "hidden", "absolute bg-gray-100 border border-t-0 shadow-xl text-gray-700 rounded-b-lg w-48 top-17 right-0 mr-6"])}"><a href="#" class="block text-xl border-b px-4 py-2 hover:bg-gray-200">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        class: "mx-2",
        icon: "fa-regular fa-user"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(((_a = unref(user)) == null ? void 0 : _a.name) || "")}</span></a><a href="#" class="block px-4 py-2 hover:bg-gray-200">Account</a><a href="#" class="block px-4 py-2 hover:bg-gray-200">Settings</a>`);
      _push(ssrRenderComponent(unref(Link), {
        as: "button",
        href: "/logout",
        method: "post",
        class: "block px-4 py-2 hover:bg-gray-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Logout`);
          } else {
            return [
              createTextVNode("Logout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="p-6 bg-gray-100 mb-20">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="w-full border-t-2 px-8 py-6 lg:flex justify-between items-center"><p class="mb-2 lg:mb-0">© Copyright 2020</p><div class="flex"><a href="#" class="mr-6 hover:text-gray-900">Terms of Service</a><a href="#" class="mr-6 hover:text-gray-900">Privacy Policy</a><a href="#" class="hover:text-gray-900">About Us</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __default__$8 = {
  layout: _sfc_main$d
};
const _sfc_main$c = /* @__PURE__ */ Object.assign(__default__$8, {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(_attrs)}>Dashboard</h1>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    ars_price: {
      type: Number,
      required: true
    },
    usd_price: {
      type: Number,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    type: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: `/checkout/${__props.id}`,
        as: "article",
        class: "grid grid-rows-[auto_auto_1fr_auto] gap-3 shadow p-5 rounded cursor-pointer transition-transform hover:-translate-y-2"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex"${_scopeId}><strong class="flex-1"${_scopeId}><span class="me-2"${_scopeId}>${ssrInterpolate(__props.title)}</span><small class="text-primary"${_scopeId}>(${ssrInterpolate(__props.type.name)})</small></strong><span class="flex-initial"${_scopeId}>${ssrInterpolate(unref(page).props.currency.label)} ${ssrInterpolate(props[`${unref(page).props.currency.code}_price`])}</span></div><div class="text-xs"${_scopeId}>`);
            if (__props.tags.length > 0) {
              _push2(`<ul class="flex"${_scopeId}><!--[-->`);
              ssrRenderList(__props.tags, (tag) => {
                _push2(`<li class="px-2 mx-1 bg-primary text-white rounded-full"${_scopeId}>${ssrInterpolate(tag.label)}</li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              _push2(`<p${_scopeId}> Sin tags </p>`);
            }
            _push2(`</div><div class="flex items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", `/item/${__props.id}/thumbnail`)} class="max-w-full max-h-[200px]"${_scopeId}></div><button type="button" class="bg-primary text-white py-2 rounded"${_scopeId}> Comprar </button>`);
          } else {
            return [
              createVNode("div", { class: "flex" }, [
                createVNode("strong", { class: "flex-1" }, [
                  createVNode("span", { class: "me-2" }, toDisplayString(__props.title), 1),
                  createVNode("small", { class: "text-primary" }, "(" + toDisplayString(__props.type.name) + ")", 1)
                ]),
                createVNode("span", { class: "flex-initial" }, toDisplayString(unref(page).props.currency.label) + " " + toDisplayString(props[`${unref(page).props.currency.code}_price`]), 1)
              ]),
              createVNode("div", { class: "text-xs" }, [
                __props.tags.length > 0 ? (openBlock(), createBlock("ul", {
                  key: 0,
                  class: "flex"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag) => {
                    return openBlock(), createBlock("li", { class: "px-2 mx-1 bg-primary text-white rounded-full" }, toDisplayString(tag.label), 1);
                  }), 256))
                ])) : (openBlock(), createBlock("p", { key: 1 }, " Sin tags "))
              ]),
              createVNode("div", { class: "flex items-center justify-center" }, [
                createVNode("img", {
                  src: `/item/${__props.id}/thumbnail`,
                  class: "max-w-full max-h-[200px]"
                }, null, 8, ["src"])
              ]),
              createVNode("button", {
                type: "button",
                class: "bg-primary text-white py-2 rounded"
              }, " Comprar ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Gallery/Partials/Item.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const __default__$7 = {
  layout: _sfc_main$f
};
const _sfc_main$a = /* @__PURE__ */ Object.assign(__default__$7, {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Object,
      required: true
    },
    filters: {
      type: Object,
      default() {
        return {
          search: "",
          tag: "",
          type: ""
        };
      }
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "galeria",
        class: "max-w-[1200px] mx-auto my-16"
      }, _attrs))}><h1 class="text-5xl underline text-primary font-serif mb-8">Nuestros diseños</h1>`);
      if (props.items.data.length > 0) {
        _push(`<div class="px-2"><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-14"><!--[-->`);
        ssrRenderList(props.items.data, (item) => {
          _push(ssrRenderComponent(_sfc_main$b, item, null, _parent));
        });
        _push(`<!--]--></div><ul class="p-10 flex justify-center"><!--[-->`);
        ssrRenderList(props.items.links, (link) => {
          _push(`<li class="px-2 py-1 bg-primary text-white font-bold">`);
          _push(ssrRenderComponent(unref(Link), {
            class: "disabled:text-gray-300",
            as: "button",
            href: link.url || "#",
            disabled: !link.url
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${link.label}</span>`);
              } else {
                return [
                  createVNode("span", {
                    innerHTML: link.label
                  }, null, 8, ["innerHTML"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<div><p class="text-2xl text-center text-md text-gray-500"> No se encontraron invitaciones.<br> Contanos por Whatsapp tu idea y la armamos a tu gusto. </p><img class="mx-auto max-w-[200px] p-3" src="/assets/images/stickers/sin-resultados.webp" alt="No hay resultados para la búsqueda"></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Gallery/Show.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const __default__$6 = {
  layout: _sfc_main$f
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign(__default__$6, {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="banner" class="p-8 bg-[url(&#39;/assets/images/banner-background.webp&#39;)] bg-no-repeat bg-cover bg-center"><div class="grid grid-cols-1 gap-y-8 md:grid-cols-[auto_auto] justify-center items-center"><div class="text-center"><header class="text-primary mb-5"><h1 class="text-[55px] font-serif leading-[4rem] mb-5"> Las invitaciones digitales<br> mas lindas </h1><p class="text-[38px]">Fijas, interactivas o en video</p></header>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        class: "bg-primary text-white py-2 px-4 rounded font-bold text-xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver diseños `);
          } else {
            return [
              createTextVNode(" Ver diseños ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><img class="w-[430px] mx-auto animate-[2s_linear_0s_scale-in]" src="/assets/images/banner-cell-invitation.webp"></div></div></div><div id="diseños" class="max-w-[1200px] mx-auto p-10"><h2 class="text-[40px] text-primary text-center font-serif mb-8">Diseños más elegidos</h2><div class="grid grid-cols-1 gap-6 md:grid-cols-3">`);
      _push(ssrRenderComponent(unref(Link), {
        as: "div",
        href: "/checkout/18",
        class: "grid grid-rows-[auto_1fr_auto] gap-5 text-center cursor-pointer group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="mx-auto group-hover:-translate-y-3 transition-transform" src="/assets/images/diseños-mas-elegidos/super-mario-bross.png"${_scopeId}><div class="flex justify-center items-center"${_scopeId}><h3 class="text-primary text-[43px] font-serif leading-10 group-hover:underline"${_scopeId}>Super Mario</h3></div><div${_scopeId}><button type="button" class="font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]"${_scopeId}>Comprar</button></div>`);
          } else {
            return [
              createVNode("img", {
                class: "mx-auto group-hover:-translate-y-3 transition-transform",
                src: "/assets/images/diseños-mas-elegidos/super-mario-bross.png"
              }),
              createVNode("div", { class: "flex justify-center items-center" }, [
                createVNode("h3", { class: "text-primary text-[43px] font-serif leading-10 group-hover:underline" }, "Super Mario")
              ]),
              createVNode("div", null, [
                createVNode("button", {
                  type: "button",
                  class: "font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]"
                }, "Comprar")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        as: "div",
        href: "/checkout/19",
        class: "grid grid-rows-[auto_1fr_auto] gap-5 text-center cursor-pointer group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="mx-auto group-hover:-translate-y-3 transition-transform" src="/assets/images/diseños-mas-elegidos/granja-acuarela-rosa.png"${_scopeId}><div class="flex justify-center items-center"${_scopeId}><h3 class="text-primary text-[43px] font-serif leading-10 group-hover:underline"${_scopeId}>Granja acuarela rosa</h3></div><div${_scopeId}><button type="button" class="font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]"${_scopeId}>Comprar</button></div>`);
          } else {
            return [
              createVNode("img", {
                class: "mx-auto group-hover:-translate-y-3 transition-transform",
                src: "/assets/images/diseños-mas-elegidos/granja-acuarela-rosa.png"
              }),
              createVNode("div", { class: "flex justify-center items-center" }, [
                createVNode("h3", { class: "text-primary text-[43px] font-serif leading-10 group-hover:underline" }, "Granja acuarela rosa")
              ]),
              createVNode("div", null, [
                createVNode("button", {
                  type: "button",
                  class: "font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]"
                }, "Comprar")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        as: "div",
        href: "/checkout/17",
        class: "grid grid-rows-[auto_1fr_auto] gap-5 text-center cursor-pointer group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="mx-auto group-hover:-translate-y-3 transition-transform" src="/assets/images/diseños-mas-elegidos/plim-plim.png"${_scopeId}><div class="flex justify-center items-center"${_scopeId}><h3 class="text-primary text-[43px] font-serif leading-10 group-hover:underline"${_scopeId}>Plim Plim</h3></div><div${_scopeId}><button type="button" class="font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]"${_scopeId}>Comprar</button></div>`);
          } else {
            return [
              createVNode("img", {
                class: "mx-auto group-hover:-translate-y-3 transition-transform",
                src: "/assets/images/diseños-mas-elegidos/plim-plim.png"
              }),
              createVNode("div", { class: "flex justify-center items-center" }, [
                createVNode("h3", { class: "text-primary text-[43px] font-serif leading-10 group-hover:underline" }, "Plim Plim")
              ]),
              createVNode("div", null, [
                createVNode("button", {
                  type: "button",
                  class: "font-serif text-white bg-primary w-[230px] h-[65px] rounded-[70px]"
                }, "Comprar")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-primary text-center font-serif text-[40px] m-10">`);
      _push(ssrRenderComponent(unref(Link), { href: "/gallery" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver mas `);
          } else {
            return [
              createTextVNode(" Ver mas ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div id="plazos-de-entrega" class="p-5 bg-[#d2b4de]"><div class="max-w-[1200px] mx-auto grid grid-cols-1 items-center gap-y-8 lg:grid-cols-2 font-serif"><div><div class="relative max-w-[500px] mx-auto"><img class="w-full h-[585px] object-cover" src="/assets/images/tiempos-de-entrega/times-background.svg"><div class="absolute top-[20%] left-[20%] w-[63%]"><h2 class="text-[#5f86e1] text-3xl mb-4">Plazos de entrega</h2><ul class="text-[#88a3e2] text-xl list-disc leading-6 space-y-3"><li>Hasta 72Hs hábiles para todos los diseños</li><li>Elegì la opcion “super rapida” si la necesitas para el mismo dìa (antes de las 16hs)</li><li>En caso de querer un diseño nuevo el tiempo mínimo es de 72Hs hábiles según disponibilidad</li></ul></div><div class="hidden"><img src="/assets/images/tiempos-de-entrega/star-background.svg"><p class="text-white text-center w-[128px] absolute top-[50px] left-[50px]">Si no tenes algun dato podes reservarla igual y dejar pendiente el armado</p></div></div></div><div class="grid md:grid-cols-2 gap-10 text-[25px] text-white"><div class="flex justify-center items-center"><div class="skew-y-3 bg-[url(&#39;/assets/images/tiempos-de-entrega/sticky-background-1.svg&#39;)] bg-no-repeat bg-center bg-cover w-[318px] h-[309px] text-center px-8 py-11"><h3 class="mb-2">Que nadie falte a tu fiesta!</h3><img class="w-[132px] h-[138px] mx-auto" src="/assets/images/tiempos-de-entrega/sticky-1.webp"></div></div><div class="flex justify-center items-center"><div class="skew-x-2 bg-[url(&#39;/assets/images/tiempos-de-entrega/sticky-background-2.svg&#39;)] bg-no-repeat bg-center bg-cover w-[318px] h-[309px] text-center px-8 py-11"><img class="w-[132px] h-[138px] mx-auto" src="/assets/images/tiempos-de-entrega/sticky-2.svg"><h3 class="text-3xl">No gaste de más</h3></div></div><div class="flex justify-center items-center"><div class="skew-y-3 -rotate-1 bg-[url(&#39;/assets/images/tiempos-de-entrega/sticky-background-3.svg&#39;)] bg-no-repeat bg-center bg-cover w-[318px] h-[309px] text-center px-8 py-8"><img class="w-[132px] h-[138px] mx-auto" src="/assets/images/tiempos-de-entrega/sticky-3.svg"><h3>Recibi tu invitacion en 72 hs hàbiles màximo</h3></div></div><div class="flex justify-center items-center"><div class="skew-x-3 bg-[url(&#39;/assets/images/tiempos-de-entrega/sticky-background-4.svg&#39;)] bg-no-repeat bg-center bg-cover w-[318px] h-[309px] text-center px-8 py-8"><h3>Personalizamos con el diseño que busques</h3><img class="w-[132px] h-[138px] mx-auto" src="/assets/images/tiempos-de-entrega/sticky-4.svg"></div></div></div></div></div><div id="categorias-mas-pedidas" class="max-w-[1200px] mx-auto p-5"><h2 class="text-[40px] text-primary text-center font-serif mb-8">Categorías mas pedidas</h2><div class="grid md:grid-cols-3 gap-4 text-xl text-primary font-bold">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { slug: "baby-showers" },
        as: "div",
        class: "grid items-center cursor-pointer group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group"${_scopeId}><img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/baby-shower.webp"${_scopeId}></div><h3 class="p-3 text-center group-hover:underline"${_scopeId}>Baby Showers</h3>`);
          } else {
            return [
              createVNode("div", { class: "h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group" }, [
                createVNode("img", {
                  class: "group-hover:scale-125 transition-transform duration-500",
                  src: "/assets/images/categorias-mas-pedidas/baby-shower.webp"
                })
              ]),
              createVNode("h3", { class: "p-3 text-center group-hover:underline" }, "Baby Showers")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { slug: "comuniones" },
        as: "div",
        class: "grid items-center cursor-pointer group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group"${_scopeId}><img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/comunion.webp"${_scopeId}></div><h3 class="p-3 text-center group-hover:underline"${_scopeId}>Comuniónes</h3>`);
          } else {
            return [
              createVNode("div", { class: "h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group" }, [
                createVNode("img", {
                  class: "group-hover:scale-125 transition-transform duration-500",
                  src: "/assets/images/categorias-mas-pedidas/comunion.webp"
                })
              ]),
              createVNode("h3", { class: "p-3 text-center group-hover:underline" }, "Comuniónes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { slug: "eventos" },
        as: "div",
        class: "grid items-center cursor-pointer group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group"${_scopeId}><img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/eventos.webp"${_scopeId}></div><h3 class="p-3 text-center group-hover:underline"${_scopeId}>Eventos</h3>`);
          } else {
            return [
              createVNode("div", { class: "h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group" }, [
                createVNode("img", {
                  class: "group-hover:scale-125 transition-transform duration-500",
                  src: "/assets/images/categorias-mas-pedidas/eventos.webp"
                })
              ]),
              createVNode("h3", { class: "p-3 text-center group-hover:underline" }, "Eventos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { slug: "confirmaciones" },
        as: "div",
        class: "grid items-center cursor-pointer group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group"${_scopeId}><img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/confirmacion.webp"${_scopeId}></div><h3 class="p-3 text-center group-hover:underline"${_scopeId}>Confirmaciónes</h3>`);
          } else {
            return [
              createVNode("div", { class: "h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group" }, [
                createVNode("img", {
                  class: "group-hover:scale-125 transition-transform duration-500",
                  src: "/assets/images/categorias-mas-pedidas/confirmacion.webp"
                })
              ]),
              createVNode("h3", { class: "p-3 text-center group-hover:underline" }, "Confirmaciónes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { slug: "casamientos" },
        as: "div",
        class: "grid items-center cursor-pointer group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group"${_scopeId}><img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/casamiento.webp"${_scopeId}></div><h3 class="p-3 text-center group-hover:underline"${_scopeId}>Casamientos</h3>`);
          } else {
            return [
              createVNode("div", { class: "h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group" }, [
                createVNode("img", {
                  class: "group-hover:scale-125 transition-transform duration-500",
                  src: "/assets/images/categorias-mas-pedidas/casamiento.webp"
                })
              ]),
              createVNode("h3", { class: "p-3 text-center group-hover:underline" }, "Casamientos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/gallery",
        data: { slug: "cumpleanos" },
        as: "div",
        class: "grid items-center cursor-pointer group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group"${_scopeId}><img class="group-hover:scale-125 transition-transform duration-500" src="/assets/images/categorias-mas-pedidas/cumpleanos.webp"${_scopeId}></div><h3 class="p-3 text-center group-hover:underline"${_scopeId}>Cumpleaños</h3>`);
          } else {
            return [
              createVNode("div", { class: "h-[150px] border border-primary rounded-xl overflow-hidden flex items-center justify-center group" }, [
                createVNode("img", {
                  class: "group-hover:scale-125 transition-transform duration-500",
                  src: "/assets/images/categorias-mas-pedidas/cumpleanos.webp"
                })
              ]),
              createVNode("h3", { class: "p-3 text-center group-hover:underline" }, "Cumpleaños")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-center p-10"><h3 class="mb-8 text-primary text-[22px] font-serif">¿Buscas una tematica nueva?</h3><a href="https://api.whatsapp.com/message/MQG3D2XP3BMWD1?autoload=1&amp;app_absent=0" target="_blank" class="text-white text-xl font-extrabold py-3 px-6 bg-primary rounded-full">CONTÁCTANOS</a></div></div><div id="kits-imprimibles" class="p-5 bg-[#d2b4de]"><div class="max-w-[1200px] mx-auto"><header class="text-white text-center mb-12"><h2 class="text-[56px] font-serif mb-4">Kits imprimibles para decoràr tus eventos</h2><p class="text-[26px] leading-8"> No pierdas tiempo diseñando, empeza cuanto antes con tu<br> proyecto, decora tu fiesta o emprende con nuestras plantillas </p></header><div class="grid md:grid-cols-3 gap-8 text-primary text-[26px] font-serif text-center uppercase"><div class="bg-white rounded-xl py-12 px-8"><img class="rounded w-[302px] h-[170px] mx-auto" src="/assets/images/kits-imprimibles/imprimi.webp"><h3 class="mt-10">Imprimí</h3></div><div class="bg-white rounded-xl py-12 px-8"><img class="rounded w-[302px] h-[170px] mx-auto" src="/assets/images/kits-imprimibles/recorta.webp"><h3 class="mt-10">Recortá</h3></div><div class="bg-white rounded-xl py-12 px-8"><img class="rounded w-[302px] h-[170px] mx-auto" src="/assets/images/kits-imprimibles/pega.webp"><h3 class="mt-10">Pegá</h3></div></div><p class="text-center text-white text-[56px] font-serif mt-5"> y listo! </p></div></div><div id="clientes-satisfechos" class="max-w-[1200px] mx-auto p-5"><h2 class="text-[40px] text-primary text-center font-serif mb-8">Clientes satisfechos</h2><div class="grid md:grid-cols-3 gap-12 justify-center"><div><img src="/assets/images/clientes-satisfechos/testimonio-anonimo.webp"></div><div><img src="/assets/images/clientes-satisfechos/testimonio-beel.webp"></div><div><img src="/assets/images/clientes-satisfechos/testimonio-bren.webp"></div></div></div><div id="quienes-somos" class="grid grid-flow-col gap-6 max-w-[1200px] mx-auto p-5"><div class="font-serif text-center"><header><p class="text-[20px] text-[#fc8dca]">SOBRE NOSOTROS</p><h2 class="text-[77px] text-primary text-center mb-8">¿Quienes somos?</h2></header><div class="text-[#59524b] space-y-5 uppercase"><p>¡SOY GISELLE, Y ESTOY ENCANTADA DE CONOCERTE!</p><p>SOY ESTUDIANTE DE LICENCIATURA EN ADMINISTRACIÓN. PERO MI VERDADERA PASIÓN RADICA EN EL MUNDO DEL DISEÑO. DESDE QUE ERA JOVEN, SIEMPRE SENTI UN AMOR PROFUNDO POR LA CREATIVIDAD Y LA EXPRESIÓN ARTÍSTICA.</p><p>DECIDÍ FUSIONAR MI AMOR POR EL DISEÑO CON MI CONOCIMIENTO EN ADMINISTRACIÓN Y EMPRENDER MI PROPIO CAMINO. ASÍ NACIÓ MI PROYECTO: CREAR INVITACIONES DIGITALES EN VIDEO QUE SON MÁS QUE SIMPLES PALABRAS EN UNA PANTALLA. SON PEQUEÑAS OBRAS DE ARTE ANIMATED_INVITATIONS, LLENAS DE COLOR Y VIDA, DISEÑADAS PARA HACER QUE CADA OCASIÓN ESPECIAL SEA AÚN MÁS MEMORABLE. CADA PROYECTO ES UNA OPORTUNIDAD PARA MÍ DE DESPLEGAR MI CREATIVIDAD Y OFRECERTE ALGO ÚNICO Y PERSONALIZADO. TENGO UN PEQUEÑO EQUIPO QUE ME ACOMPAÑA EN ESTA HERMOSA TAREA, MI COMPAÑERO DE VIDA PROGRAMANDO LA WEB, LAS INVITACIONES MAS COMPLEJAS Y DANDOLE VIDA A MIS IDEAS. TAMBIEN ESTAN MIS AYUDANTES DE CONFIANZA MICA Y SABRI &lt;3. </p><p> ¡GRACIAS POR VISITAR MI PÁGINA Y POR CONSIDERAR CONFIAR EN MÍ PARA TUS INVITACIONES ESPECIALES!<br> CON CARIÑO, GISELLE </p></div><div class="mt-12"><a href="mailto:contacto@papelitodigital.com.ar" target="_blank" class="text-[16px] text-[#fc8dca] underline underline-offset-8">ENVIAME UN EMAIL</a></div></div><div class="hidden md:flex"><img class="object-cover" src="/assets/images/quienes-somos.webp"></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "Select",
  __ssrInlineRender: true,
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<select${ssrRenderAttrs(mergeProps({
        value: __props.modelValue,
        class: "w-full p-2 border border-[rgb(225, 227, 230)] accent-primary"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</select>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Select.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __default__$5 = {
  layout: _sfc_main$d
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__$5, {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      title: null,
      description: null,
      ars_price: null,
      usd_price: null,
      type_id: 1,
      tagInput: null,
      tags: [],
      files: null,
      thumbnail: null
    });
    ref(null);
    ref(null);
    const unselectedTags = computed(() => {
      return props.tags.filter((t) => !form.tags.includes(t.label));
    });
    function selectTag() {
      if (!form.tags.includes(form.tagInput)) {
        form.tags.push(form.tagInput);
      }
      form.tagInput = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl">Nueva artículo</h1>`);
      if (_ctx.$page.props.flash.message) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "success" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$page.props.flash.message)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$page.props.flash.message), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="py-5 space-y-5"><div>`);
      _push(ssrRenderComponent(Label, { for: "title" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Titulo`);
          } else {
            return [
              createTextVNode("Titulo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        modelValue: unref(form).title,
        "onUpdate:modelValue": ($event) => unref(form).title = $event,
        id: "title",
        type: "text",
        required: ""
      }, null, _parent));
      if (unref(form).errors.title) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "description" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Descripcion`);
          } else {
            return [
              createTextVNode("Descripcion")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event,
        id: "description",
        type: "text"
      }, null, _parent));
      if (unref(form).errors.description) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.description)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.description), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "ars-price" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Precio en pesos`);
          } else {
            return [
              createTextVNode("Precio en pesos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        modelValue: unref(form).ars_price,
        "onUpdate:modelValue": ($event) => unref(form).ars_price = $event,
        id: "ars-price",
        type: "number",
        step: "1",
        min: "1",
        required: ""
      }, null, _parent));
      if (unref(form).errors.ars_price) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.ars_price)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.ars_price), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "usd-price" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Precio en dólares`);
          } else {
            return [
              createTextVNode("Precio en dólares")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        modelValue: unref(form).usd_price,
        "onUpdate:modelValue": ($event) => unref(form).usd_price = $event,
        id: "usd-price",
        type: "number",
        step: "1",
        min: "1",
        required: ""
      }, null, _parent));
      if (unref(form).errors.usd_price) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.usd_price)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.usd_price), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "type" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tipo`);
          } else {
            return [
              createTextVNode("Tipo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        modelValue: unref(form).type_id,
        "onUpdate:modelValue": ($event) => unref(form).type_id = $event,
        id: "type"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value="1"${_scopeId}>Invitación estática</option><option value="2"${_scopeId}>Invitación animada</option><option value="3"${_scopeId}>Kit imprimible</option>`);
          } else {
            return [
              createVNode("option", { value: "1" }, "Invitación estática"),
              createVNode("option", { value: "2" }, "Invitación animada"),
              createVNode("option", { value: "3" }, "Kit imprimible")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).errors.price) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.price)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.price), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "tags" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tags`);
          } else {
            return [
              createTextVNode("Tags")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        onChange: selectTag,
        onKeydown: selectTag,
        modelValue: unref(form).tagInput,
        "onUpdate:modelValue": ($event) => unref(form).tagInput = $event,
        id: "tags",
        ref: "tagInput",
        type: "text",
        list: "tagsDatalist"
      }, null, _parent));
      _push(`<datalist id="tagsDatalist"><!--[-->`);
      ssrRenderList(unselectedTags.value, (tag) => {
        _push(`<option>${ssrInterpolate(tag.label)}</option>`);
      });
      _push(`<!--]--></datalist><div class="p-2">`);
      if (unref(form).tags.length === 0) {
        _push(`<p>No se seleccionaron tags</p>`);
      } else {
        _push(`<ul class="flex"><!--[-->`);
        ssrRenderList(unref(form).tags, (tag) => {
          _push(`<li class="bg-blue-400 text-white text-xs rounded-full py-1 px-2 mx-1 hover:cursor-pointer hover:outline"><span class="me-1">${ssrInterpolate(tag)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</div>`);
      if (unref(form).errors.tags) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.tags)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.tags), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "thumbnail" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Miñatura del artículo`);
          } else {
            return [
              createTextVNode("Miñatura del artículo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input class="block" id="thumbnail" type="file" accept="image/*">`);
      if (unref(form).errors.thumbnail) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.thumbnail)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.thumbnail), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "source" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Imagenes y videos`);
          } else {
            return [
              createTextVNode("Imagenes y videos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input class="block" id="source" type="file" accept="video/*,image/*" required multiple>`);
      if (unref(form).errors.files) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.files)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.files), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex">`);
      _push(ssrRenderComponent(_sfc_main$q, {
        loading: unref(form).processing,
        disabled: unref(form).processing,
        class: "me-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Guardar `);
          } else {
            return [
              createTextVNode(" Guardar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$q, {
        type: "button",
        onClick: ($event) => unref(form).cancel(),
        disabled: !unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cancelar `);
          } else {
            return [
              createTextVNode(" Cancelar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Items/Create.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const __default__$4 = {
  layout: _sfc_main$d
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__$4, {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      _method: "put",
      title: props.item.title,
      description: props.item.description,
      ars_price: props.item.ars_price,
      usd_price: props.item.usd_price,
      tagInput: null,
      tags: props.item.tags.map((t) => t.label),
      thumbnail: null,
      files: null,
      filesDelete: []
    });
    const unselectedTags = computed(() => {
      return props.tags.filter((t) => !form.tags.includes(t.label));
    });
    function selectTag() {
      if (!form.tags.includes(form.tagInput)) {
        form.tags.push(form.tagInput);
      }
      form.tagInput = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl">Editar Invitacion</h1>`);
      if (_ctx.$page.props.flash.message) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "success" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$page.props.flash.message)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$page.props.flash.message), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="py-5 space-y-5"><div>`);
      _push(ssrRenderComponent(Label, { for: "title" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Titulo`);
          } else {
            return [
              createTextVNode("Titulo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        modelValue: unref(form).title,
        "onUpdate:modelValue": ($event) => unref(form).title = $event,
        id: "title",
        type: "text",
        required: ""
      }, null, _parent));
      if (unref(form).errors.title) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "description" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Descripcion`);
          } else {
            return [
              createTextVNode("Descripcion")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        modelValue: unref(form).description,
        "onUpdate:modelValue": ($event) => unref(form).description = $event,
        id: "description",
        type: "text"
      }, null, _parent));
      if (unref(form).errors.description) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.description)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.description), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "ars-price" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Precio en pesos`);
          } else {
            return [
              createTextVNode("Precio en pesos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        modelValue: unref(form).ars_price,
        "onUpdate:modelValue": ($event) => unref(form).ars_price = $event,
        id: "ars-price",
        type: "number",
        step: "1",
        min: "1",
        required: ""
      }, null, _parent));
      if (unref(form).errors.ars_price) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.ars_price)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.ars_price), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "usd-price" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Precio en dólares`);
          } else {
            return [
              createTextVNode("Precio en dólares")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        modelValue: unref(form).usd_price,
        "onUpdate:modelValue": ($event) => unref(form).usd_price = $event,
        id: "usd-price",
        type: "number",
        step: "1",
        min: "1",
        required: ""
      }, null, _parent));
      if (unref(form).errors.usd_price) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.usd_price)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.usd_price), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(Label, { for: "tags" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tags`);
          } else {
            return [
              createTextVNode("Tags")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$s, {
        onChange: selectTag,
        onKeydown: selectTag,
        modelValue: unref(form).tagInput,
        "onUpdate:modelValue": ($event) => unref(form).tagInput = $event,
        id: "tags",
        ref: "tagInput",
        type: "text",
        list: "tagsDatalist"
      }, null, _parent));
      _push(`<datalist id="tagsDatalist"><!--[-->`);
      ssrRenderList(unselectedTags.value, (tag) => {
        _push(`<option>${ssrInterpolate(tag.label)}</option>`);
      });
      _push(`<!--]--></datalist><div class="p-2">`);
      if (unref(form).tags.length === 0) {
        _push(`<p>No se seleccionaron tags</p>`);
      } else {
        _push(`<ul class="flex"><!--[-->`);
        ssrRenderList(unref(form).tags, (tag) => {
          _push(`<li class="bg-blue-400 text-white text-xs rounded-full py-1 px-2 mx-1 hover:cursor-pointer hover:outline"><span class="me-1">${ssrInterpolate(tag)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</div>`);
      if (unref(form).errors.tags) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.tags)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.tags), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><img class="max-w-[400px] my-1"${ssrRenderAttr("src", `/item/${__props.item.id}/thumbnail`)}${ssrRenderAttr("alt", `Thumbnail del artículo ${__props.item.title}`)}>`);
      _push(ssrRenderComponent(Label, {
        for: "thumbnail",
        class: "my-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Miñatura del artículo`);
          } else {
            return [
              createTextVNode("Miñatura del artículo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input class="block my-1" id="thumbnail" type="file" accept="image/*">`);
      if (unref(form).errors.thumbnail) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.thumbnail)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.thumbnail), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><ul class="grid grid-cols-6 gap-3"><!--[-->`);
      ssrRenderList(__props.item.files, (file) => {
        _push(`<li>`);
        if (file.mime.startsWith("image/")) {
          _push(`<img class="block max-w-full"${ssrRenderAttr("src", `/file/${file.id}`)}${ssrRenderAttr("alt", `Achivo adjunto del artículo ${__props.item.title}`)}>`);
        } else {
          _push(`<!---->`);
        }
        if (file.mime.startsWith("video/")) {
          _push(`<video class="block max-w-full"${ssrRenderAttr("src", `/file/${file.id}`)} controls> No se pudo reproducir el video. </video>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-center p-2"><input${ssrRenderAttr("id", `eliminar-${file.id}`)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).filesDelete) ? ssrLooseContain(unref(form).filesDelete, file.id) : unref(form).filesDelete) ? " checked" : ""}${ssrRenderAttr("value", file.id)} type="checkbox" class="mx-1">`);
        _push(ssrRenderComponent(Label, {
          for: `eliminar-${file.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Eliminar`);
            } else {
              return [
                createTextVNode("Eliminar")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul><div>`);
      _push(ssrRenderComponent(Label, {
        for: "files",
        class: "my-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Imagenes y videos`);
          } else {
            return [
              createTextVNode("Imagenes y videos")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input class="block my-1" id="files" type="file" accept="image/*,video/*" multiple>`);
      if (unref(form).errors.files) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "danger" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(form).errors.files)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(form).errors.files), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex">`);
      _push(ssrRenderComponent(_sfc_main$q, {
        loading: unref(form).processing,
        disabled: unref(form).processing,
        class: "me-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Guardar `);
          } else {
            return [
              createTextVNode(" Guardar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$q, {
        type: "button",
        onClick: ($event) => unref(form).cancel(),
        disabled: !unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cancelar `);
          } else {
            return [
              createTextVNode(" Cancelar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Items/Edit.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const __default__$3 = {
  layout: _sfc_main$d
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$3, {
  __name: "List",
  __ssrInlineRender: true,
  props: {
    paginatedItems: {
      type: Object,
      requird: true
    }
  },
  setup(__props) {
    library.add(faPenToSquare, faCircleXmark);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="text-3xl">Artículos</h1>`);
      if (_ctx.$page.props.flash.message) {
        _push(ssrRenderComponent(_sfc_main$p, { type: "success" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$page.props.flash.message)}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$page.props.flash.message), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="p-7 grid lg:grid-cols-5 gap-10"><!--[-->`);
      ssrRenderList(__props.paginatedItems.data, (item) => {
        _push(`<li><header class="flex items-center"><h2 class="flex-1 text-xl py-2 text-blue-400">${ssrInterpolate(item.title)}</h2><div class="flex-initial text-xl">`);
        _push(ssrRenderComponent(unref(Link), {
          as: "button",
          href: `/item/${item.id}/edit`,
          class: "p-1 hover:text-blue-400 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(FontAwesomeIcon), { icon: ["far", "pen-to-square"] }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(FontAwesomeIcon), { icon: ["far", "pen-to-square"] })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          as: "button",
          href: `/item/${item.id}`,
          method: "delete",
          class: "p-1 hover:text-blue-400 transition-colors",
          "preserve-scroll": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(FontAwesomeIcon), { icon: ["far", "circle-xmark"] }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(FontAwesomeIcon), { icon: ["far", "circle-xmark"] })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></header><div class="py-1"><span>Descripcion: </span><strong class="ms-2">${ssrInterpolate(item.description)}</strong></div><div class="py-1"><span>Precio: </span><strong class="ms-2">ARS $${ssrInterpolate(item.ars_price)} / USD $${ssrInterpolate(item.usd_price)}</strong></div><div class="py-1"><span class="me-2">Tags:</span>`);
        if (item.tags.length === 0) {
          _push(`<strong>Sin tags</strong>`);
        } else {
          _push(`<div class="flex"><!--[-->`);
          ssrRenderList(item.tags, (tag) => {
            _push(`<span class="bg-blue-400 text-white text-xs rounded-full py-1 px-2 mx-1">${ssrInterpolate(tag.label)}</span>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div><div class="py-1"><span>Tipo: </span><strong class="ms-2">${ssrInterpolate(item.type.name)}</strong></div><div class="py-1"><img class="max-w-full"${ssrRenderAttr("src", `/item/${item.id}/thumbnail`)}${ssrRenderAttr("alt", `Thumbnail del artículo ${item.title}`)}></div></li>`);
      });
      _push(`<!--]--></ul><!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Items/List.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex justify-center m-3" }, _attrs))}><!--[-->`);
      ssrRenderList(props.links, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(unref(Link), {
          as: "button",
          class: ["bg-primary disabled:text-gray-300 py-1 px-2 mx-2 min-w-[100px] text-white rounded", { outline: link.active }],
          href: link.url || "#",
          disabled: !link.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${link.label}</span>`);
            } else {
              return [
                createVNode("span", {
                  innerHTML: link.label
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __default__$2 = {
  layout: _sfc_main$d
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$2, {
  __name: "List",
  __ssrInlineRender: true,
  props: {
    paginatedNotifications: {
      type: Object,
      requird: true
    }
  },
  setup(__props) {
    library.add(faTrashCan, faEnvelope, faEnvelopeOpen, faBell);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="text-3xl">Notificaciones</h1>`);
      if (__props.paginatedNotifications.data.length === 0) {
        _push(`<p class="text-2xl text-center mx-3 my-6"> No hay notificaciones </p>`);
      } else {
        _push(`<div class="max-w-[800px] mx-auto"><header class="flex p-2">`);
        _push(ssrRenderComponent(unref(Link), {
          as: "button",
          method: "post",
          href: "/notifications-all/read",
          class: "text-sm text-primary hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Marcar todo como leido`);
            } else {
              return [
                createTextVNode("Marcar todo como leido")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</header><ul><!--[-->`);
        ssrRenderList(__props.paginatedNotifications.data, (notification) => {
          _push(`<li class="${ssrRenderClass([{ "bg-slate-200": !notification.read_at }, "grid grid-flow-col grid-cols-[auto_1fr_auto_auto] items-center p-3 cursor-pointer hover:bg-slate-200"])}"><div class="relative mx-2">`);
          _push(ssrRenderComponent(unref(FontAwesomeIcon), {
            class: "m-1",
            icon: ["far", "bell"]
          }, null, _parent));
          if (!notification.read_at) {
            _push(`<div class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="mx-2">`);
          if (notification.type.includes("OrderCreated")) {
            _push(`<!--[--> Tiene un nuevo pedido. `);
            _push(ssrRenderComponent(unref(Link), {
              class: "m-1 text-primary font-bold hover:underline",
              href: `/order/${notification.data.order_id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Ir`);
                } else {
                  return [
                    createTextVNode("Ir")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (notification.type.includes("OrderPaid")) {
            _push(`<!--[--> Un pedido pedido ya fue <strong class="text-green-500 m-1">Pagado</strong>. `);
            _push(ssrRenderComponent(unref(Link), {
              class: "m-1 text-primary font-bold hover:underline",
              href: `/order/${notification.data.order_id}`
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Ir`);
                } else {
                  return [
                    createTextVNode("Ir")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p><span class="mx-2">${ssrInterpolate(new Date(notification.created_at).toLocaleString())}</span><div class="mx-6 text-2xl">`);
          if (notification.read_at) {
            _push(ssrRenderComponent(unref(Link), {
              class: "me-6",
              as: "button",
              href: `/notifications/${notification.id}`,
              method: "patch",
              data: { read: 0 }
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(unref(FontAwesomeIcon), { icon: ["far", "envelope-open"] }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(unref(FontAwesomeIcon), { icon: ["far", "envelope-open"] })
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(unref(Link), {
              class: "me-6",
              as: "button",
              href: `/notifications/${notification.id}`,
              method: "patch",
              data: { read: 1 }
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(unref(FontAwesomeIcon), { icon: ["far", "envelope"] }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(unref(FontAwesomeIcon), { icon: ["far", "envelope"] })
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(ssrRenderComponent(unref(Link), {
            as: "button",
            href: `/notifications/${notification.id}`,
            method: "delete"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(FontAwesomeIcon), { icon: ["far", "trash-can"] }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(unref(FontAwesomeIcon), { icon: ["far", "trash-can"] })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul></div>`);
      }
      _push(ssrRenderComponent(_sfc_main$4, {
        links: __props.paginatedNotifications.links
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notifications/List.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const __default__$1 = {
  layout: _sfc_main$d
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "List",
  __ssrInlineRender: true,
  props: {
    search: {
      type: Object,
      required: true
    },
    paginatedOrders: {
      type: Object,
      requird: true
    }
  },
  setup(__props) {
    const props = __props;
    library.add(faCircleCheck, faCircleXmark);
    const search = useForm({
      query: props.search.query,
      finished: props.search.finished
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 class="text-3xl">Pedidos</h1><form class="py-2 flex">`);
      _push(ssrRenderComponent(_sfc_main$s, {
        modelValue: unref(search).query,
        "onUpdate:modelValue": ($event) => unref(search).query = $event,
        class: "max-w-xs me-3",
        type: "search",
        placeholder: "Buscar.."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        modelValue: unref(search).finished,
        "onUpdate:modelValue": ($event) => unref(search).finished = $event,
        class: "max-w-xs me-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<option value=""${_scopeId}>Todas</option><option value="0"${_scopeId}>Pendiente</option><option value="1"${_scopeId}>Finalizado</option>`);
          } else {
            return [
              createVNode("option", { value: "" }, "Todas"),
              createVNode("option", { value: "0" }, "Pendiente"),
              createVNode("option", { value: "1" }, "Finalizado")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$q, {
        class: "p-0",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Buscar`);
          } else {
            return [
              createTextVNode("Buscar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (__props.paginatedOrders.data.length === 0) {
        _push(`<p class="text-2xl text-center mx-3 my-6">No hay pedidos</p>`);
      } else {
        _push(`<table class="w-full my-3 text-center"><thead class="bg-primary text-white"><th class="py-1" scope="col">Artículo</th><th scope="col">Cumpleañero/a</th><th scope="col">Monto</th><th scope="col">Prioridad</th><th scope="col">Método de pago</th><th scope="col">Pagado</th><th scope="col">Estado</th><th scope="col">Fecha</th><th scope="col"></th></thead><tbody><!--[-->`);
        ssrRenderList(__props.paginatedOrders.data, (order) => {
          var _a;
          _push(`<tr class="even:bg-slate-50"><td class="py-4"><strong>${ssrInterpolate(order.item.title)}</strong><small class="mx-2">(${ssrInterpolate(order.item.type.name)})</small></td><td>${ssrInterpolate(order.birthday_name)}</td><td class="uppercase">${ssrInterpolate(order.currency)} ${ssrInterpolate(order.price)}</td><td>`);
          if (order.high_priority) {
            _push(ssrRenderComponent(unref(FontAwesomeIcon), {
              icon: ["far", "circle-check"],
              class: "text-green-500"
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(FontAwesomeIcon), {
              icon: ["far", "circle-xmark"],
              class: "text-red-500"
            }, null, _parent));
          }
          _push(`</td><td>`);
          if (order.payment_method === "transferencia") {
            _push(`<img class="w-10 mx-auto" src="/assets/images/icons/bank-transfer.webp" alt="Transferencia bancaria">`);
          } else {
            _push(`<!---->`);
          }
          if (order.payment_method === "mercadopago") {
            _push(`<img class="w-14 mx-auto" src="/assets/images/cards/mercadopago.webp" alt="Mercado pago">`);
          } else {
            _push(`<!---->`);
          }
          if (order.payment_method === "paypal") {
            _push(`<img class="w-14 mx-auto" src="/assets/images/cards/paypal-logo.webp" alt="Paypal">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</td><td>`);
          if ((_a = order.payment) == null ? void 0 : _a.is_paid) {
            _push(ssrRenderComponent(unref(FontAwesomeIcon), {
              icon: ["far", "circle-check"],
              class: "text-green-500"
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(FontAwesomeIcon), {
              icon: ["far", "circle-xmark"],
              class: "text-red-500"
            }, null, _parent));
          }
          _push(`</td><td>`);
          if (order.finished) {
            _push(`<strong class="text-green-500">Finalizado</strong>`);
          } else {
            _push(`<strong class="text-red-500">Pendiente</strong>`);
          }
          _push(`</td><td>${ssrInterpolate(new Date(order.created_at).toLocaleString())}</td><td>`);
          _push(ssrRenderComponent(unref(Link), {
            href: `/order/${order.id}`,
            as: "button",
            class: "py-1 px-4 rounded bg-primary font-bold text-white me-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Ver `);
              } else {
                return [
                  createTextVNode(" Ver ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table>`);
      }
      _push(ssrRenderComponent(_sfc_main$4, {
        links: __props.paginatedOrders.links
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Orders/List.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const Show_vue_vue_type_style_index_0_scoped_20dec48c_lang = "";
const __default__ = {
  layout: _sfc_main$d
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    order: {
      type: Object,
      requird: true
    }
  },
  setup(__props) {
    const props = __props;
    library.add(faAngleLeft, faReceipt, faCircleCheck, faCircleXmark, faPenToSquare);
    ref(null);
    const transferPaymentForm = useForm({
      reference: "",
      receipt_image: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<!--[--><header class="flex items-center my-2 text-3xl" data-v-20dec48c>`);
      _push(ssrRenderComponent(unref(Link), { href: "/order" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FontAwesomeIcon), { icon: ["fas", "angle-left"] }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(FontAwesomeIcon), { icon: ["fas", "angle-left"] })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="mx-4" data-v-20dec48c>Pedido número #${ssrInterpolate(__props.order.id)}</h1>`);
      if (__props.order.finished) {
        _push(`<small class="text-green-500" data-v-20dec48c>Terminado!</small>`);
      } else {
        _push(`<small class="text-red-500" data-v-20dec48c>Pendiente!</small>`);
      }
      _push(`</header><div class="flex items-center gap-3 p-4" data-v-20dec48c><form style="${ssrRenderStyle(props.order.payment_method === "transferencia" ? null : { display: "none" })}" class="flex-1 flex items-center border p-2 gap-2" data-v-20dec48c>`);
      if ((_a = __props.order.payment) == null ? void 0 : _a.receipt_image) {
        _push(`<p class="text-blue-500" data-v-20dec48c>Ya hay un comprobante cargado.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input class="flex-1 p-1" placeholder="Ej: Número de comprobante" type="text"${ssrRenderAttr("value", unref(transferPaymentForm).reference)} data-v-20dec48c><input class="flex-1" type="file" accept="image/*" data-v-20dec48c><button${ssrIncludeBooleanAttr(unref(transferPaymentForm).processing) ? " disabled" : ""} type="submit" class="flex-1 py-1 px-3 bg-blue-400 rounded text-white font-bold" data-v-20dec48c>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        class: "me-2",
        icon: ["fas", "receipt"]
      }, null, _parent));
      _push(` Ingresar pago </button></form>`);
      _push(ssrRenderComponent(unref(Link), {
        as: "button",
        href: `/order/${props.order.id}`,
        method: "put",
        data: { finished: !props.order.finished },
        class: "py-1 px-3 bg-blue-400 rounded text-white font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.order.finished) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                class: "me-2",
                icon: ["far", "circle-xmark"]
              }, null, _parent2, _scopeId));
              _push2(` Marcar como pendiente <!--]-->`);
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                class: "me-2",
                icon: ["far", "circle-check"]
              }, null, _parent2, _scopeId));
              _push2(` Marcar como finalizado <!--]-->`);
            }
          } else {
            return [
              __props.order.finished ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(unref(FontAwesomeIcon), {
                  class: "me-2",
                  icon: ["far", "circle-xmark"]
                }),
                createTextVNode(" Marcar como pendiente ")
              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(unref(FontAwesomeIcon), {
                  class: "me-2",
                  icon: ["far", "circle-check"]
                }),
                createTextVNode(" Marcar como finalizado ")
              ], 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><article class="my-7 max-w-2xl mx-auto space-y-12" data-v-20dec48c><section data-v-20dec48c><h2 class="text-4xl text-primary mb-5" data-v-20dec48c>General</h2><ul class="space-y-2" data-v-20dec48c><li data-v-20dec48c><span data-v-20dec48c>Artículo:</span><span data-v-20dec48c><span class="me-2" data-v-20dec48c>${ssrInterpolate(__props.order.item.title)}</span><small class="me-4" data-v-20dec48c>(${ssrInterpolate(__props.order.item.type.name)} años)</small>`);
      _push(ssrRenderComponent(unref(Link), {
        href: `/item/${__props.order.item.id}/edit`,
        class: "text-sm text-white font-bold px-2 py-1 rounded bg-blue-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ver`);
          } else {
            return [
              createTextVNode("Ver")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></li><li data-v-20dec48c><span data-v-20dec48c>Prioridad:</span>`);
      if (__props.order.high_priority) {
        _push(`<span class="text-green-500 font-bold" data-v-20dec48c>Si</span>`);
      } else {
        _push(`<span class="text-red-500 font-bold" data-v-20dec48c>No</span>`);
      }
      _push(`</li><li data-v-20dec48c><span data-v-20dec48c>Ubicación en mapa:</span>`);
      if (__props.order.map_ubication) {
        _push(`<span class="text-green-500 font-bold" data-v-20dec48c>Si</span>`);
      } else {
        _push(`<span class="text-red-500 font-bold" data-v-20dec48c>No</span>`);
      }
      _push(`</li><li data-v-20dec48c><span data-v-20dec48c>Confirmación por whatsapp:</span>`);
      if (__props.order.whatsapp_confirmation) {
        _push(`<span class="text-green-500 font-bold" data-v-20dec48c>Si</span>`);
      } else {
        _push(`<span class="text-red-500 font-bold" data-v-20dec48c>No</span>`);
      }
      _push(`</li><li data-v-20dec48c><span data-v-20dec48c>Precio final:</span><span class="uppercase" data-v-20dec48c>${ssrInterpolate(__props.order.currency)} ${ssrInterpolate(__props.order.price)}</span></li><li data-v-20dec48c><span data-v-20dec48c>Fecha:</span><span data-v-20dec48c>${ssrInterpolate(new Date(__props.order.created_at).toLocaleString())}</span></li><li data-v-20dec48c><span data-v-20dec48c>Método de pago:</span><span class="uppercase" data-v-20dec48c>${ssrInterpolate(__props.order.payment_method)}</span></li><li data-v-20dec48c><span data-v-20dec48c>Pagado:</span><span class="text-xl flex items-center" data-v-20dec48c>`);
      if ((_b = __props.order.payment) == null ? void 0 : _b.receipt_image) {
        _push(`<a${ssrRenderAttr("href", `/transfer-payment/${props.order.id}/view`)} target="_blank" class="text-xs text-primary underline me-2" data-v-20dec48c>Ver comprobante</a>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = __props.order.payment) == null ? void 0 : _c.is_paid) {
        _push(ssrRenderComponent(unref(FontAwesomeIcon), {
          icon: ["far", "circle-check"],
          class: "text-green-500"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(FontAwesomeIcon), {
          icon: ["far", "circle-xmark"],
          class: "text-red-500"
        }, null, _parent));
      }
      _push(`</span></li><li data-v-20dec48c><span data-v-20dec48c>Finalizado:</span><span class="text-xl" data-v-20dec48c>`);
      if (__props.order.finished) {
        _push(ssrRenderComponent(unref(FontAwesomeIcon), {
          icon: ["far", "circle-check"],
          class: "text-green-500"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(FontAwesomeIcon), {
          icon: ["far", "circle-xmark"],
          class: "text-red-500"
        }, null, _parent));
      }
      _push(`</span></li></ul></section><section data-v-20dec48c><h2 class="text-4xl text-primary mb-5" data-v-20dec48c>Evento</h2><ul class="space-y-2" data-v-20dec48c><li data-v-20dec48c><span data-v-20dec48c>Nombre:</span><span data-v-20dec48c>${ssrInterpolate(__props.order.birthday_name)}</span> <small data-v-20dec48c>(${ssrInterpolate(__props.order.birthday_age)} años)</small></li><li data-v-20dec48c><span data-v-20dec48c>Dirección principal:</span><span data-v-20dec48c>${ssrInterpolate(__props.order.birthday_main_address)}</span></li><li data-v-20dec48c><span data-v-20dec48c>Dirección secundaria:</span><span data-v-20dec48c>${ssrInterpolate(__props.order.birthday_secondary_address)}</span></li><li data-v-20dec48c><span data-v-20dec48c>Fecha:</span><span data-v-20dec48c>${ssrInterpolate(new Date(__props.order.birthday_date).toLocaleDateString())}</span></li><li data-v-20dec48c><span data-v-20dec48c>Horario:</span><span data-v-20dec48c>Desde ${ssrInterpolate(__props.order.birthday_from_time.slice(0, 5))} hasta ${ssrInterpolate(__props.order.birthday_to_time.slice(0, 5))}</span></li><li data-v-20dec48c><span data-v-20dec48c>Observación:</span><span data-v-20dec48c>${ssrInterpolate(__props.order.observation)}</span></li></ul></section><section data-v-20dec48c><h2 class="text-4xl text-primary mb-5" data-v-20dec48c>Contacto</h2><ul class="space-y-2" data-v-20dec48c><li data-v-20dec48c><span data-v-20dec48c>Nombre:</span><span data-v-20dec48c>${ssrInterpolate(__props.order.contact_name)}</span></li><li data-v-20dec48c><span data-v-20dec48c>Teléfono:</span><span data-v-20dec48c>${ssrInterpolate(__props.order.contact_number)}</span></li></ul></section></article><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Orders/Show.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Show$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-20dec48c"]]);
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show$1
}, Symbol.toStringTag, { value: "Module" }));
const Show_vue_vue_type_style_index_0_scoped_898ece04_lang = "";
const _sfc_main = {
  layout: _sfc_main$f
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[800px] mx-auto space-y-7" }, _attrs))} data-v-898ece04><section data-v-898ece04><h2 data-v-898ece04>Horarios de atención</h2><ul class="list-disc" data-v-898ece04><li data-v-898ece04>Lunes a viernes de 10:00 a 18:00.</li><li data-v-898ece04>Sábados de 09:00 a 13:00</li><li data-v-898ece04>No trabajamos domingos ni feriados, en caso de necesitar algo con urgencia, escribir por WhatsApp indicándonos lo que necesitas, pero no aseguramos la respuesta en el momento. </li></ul></section><section data-v-898ece04><h2 data-v-898ece04>¿En qué tamaño se envían los archivos?</h2><p data-v-898ece04><strong data-v-898ece04>Kits imprimibles: </strong>Enviamos los archivos a tu dirección de correo electrónico en formato PDF y tamaño A4 (21x29,7cm), a menos que solicites el tamaño A3. Los archivos se abren utilizando Adobe Acrobat Reader, que se encuentra disponible en todas las computadoras y es GRATUITO. Vas a recibir un archivo con INSTRUCCIONES sobre el tipo de papel recomendado para cada elemento a imprimir. Al tener los archivos en tu correo electrónico, no tienen fecha de caducidad, por lo que podés utilizarlos en cualquier momento. En cuanto a los afiches de bienvenida son los únicos que van en ambos tamaños A4 y A3, no lo enviamos en otros tamaños, ante cualquier duda consultar antes de comprar. </p><p data-v-898ece04><strong data-v-898ece04>Invitación fija (estática):</strong> Formato PNG. </p><p data-v-898ece04><strong data-v-898ece04>Invitación interactiva (botones):</strong> Formato PDF. </p><p data-v-898ece04><strong data-v-898ece04>Invitación animada(video):</strong> Formato MP4. </p></section><section data-v-898ece04><h2 data-v-898ece04>¿Cuál es el costo de envío?</h2><p data-v-898ece04>El envío es <strong data-v-898ece04>GRATUITO</strong>.</p><p data-v-898ece04>Para <strong data-v-898ece04>kits imprimibles</strong> los archivos se envían por mail, en caso de necesitarlo por WhatsApp, por favor aclararlo al momento de la confirmación de la compra.</p><p data-v-898ece04>Para <strong data-v-898ece04>invitaciones digitales</strong>, el archivo se enviará por mail y por WhatsApp, es responsabilidad del cliente guardar el archivo, no podemos reenviarlo después de 48hs de haberlo hecho ya que manejamos un gran volumen de archivos y nos resulta imposible tenerlos a todos guardados, es probable que luego de una semana su archivo ya no exista en nuestra base y cualquier cambio implicaría hacerla nuevamente. Por favor tenga esto en cuenta antes de pasar los datos del evento. Si no está seguro de la fecha y horario, puede dejar pendiente la creación de esta para el momento adecuado, se puede abonar con anticipación para reservar precio 😉.</p></section><section data-v-898ece04><h2 data-v-898ece04>¿Cómo se realizan los envíos?</h2><p data-v-898ece04>Por mail a la cuenta que nos indiques en el mail de confirmación.</p><p data-v-898ece04>Las invitaciones también se enviarán por WhatsApp para que puedas compartirla en el momento.</p></section><section data-v-898ece04><h2 data-v-898ece04>¿Cuánto tarda en llegar mi pedido?</h2><p data-v-898ece04>Si se trata de un kit personalizado, el plazo es 48 horas desde el momento en que nos envías los datos para editarlo. Los kits sin personalizar se envían normalmente en el día.</p><p data-v-898ece04>Si lo necesitas urgente por favor escribinos por whatsapp para ver si tenemos disponibilidad de envío.</p></section><section data-v-898ece04><h2 data-v-898ece04>¿Se pueden pedir cambios una vez recibido el pedido?</h2><p data-v-898ece04>No, una vez recibido no se puede reenviar, en caso de necesitar algún cambio el mismo tendrá un costo extra, por eso pedimos que aclaren todo al momento de hacer la compra y ANTES de recibir su archivo. </p><p data-v-898ece04>En <strong data-v-898ece04>invitaciones digitales</strong> pedimos que no pasen los datos hasta no estar seguros del horario y dirección del evento ya que un mínimo cambio puede significar tener que armarla desde cero, por lo tanto, se cobrará un extra si la invitación ya fue enviada.</p><p data-v-898ece04>Para DISEÑOS NUEVOS de invitaciones, donde el cliente no ve un ejemplo previo de como es la invitación, SI están permitidas hasta dos modificaciones luego de recibir el archivo, las modificaciones las hacemos en una sola tanda de cambios, luego de eso cualquier otra modificación llevará un costo extra. Asegurarse de pedir todo ANTES de que empecemos el proceso creativo, ya sean frases, música de fondo, colores o tonos, etc. también pueden enviar un ejemplo que les guste para guiarnos y asegurarnos que su invitación sea justo lo que esperaban.</p></section><section data-v-898ece04><h2 data-v-898ece04>¿Cómo envío los datos para editarlo?</h2><p data-v-898ece04>Una vez confirmado el pago tendrá la opción de cargar los datos o seleccionar la opción “Datos pendientes”, en ese caso les llegará un mail/WhatsApp con el asunto/mensaje COMPRA PENDIENTE DE DATOS, con lo que necesitamos para avanzar con el envío del archivo.</p></section><section data-v-898ece04><h2 data-v-898ece04>¿Los kits se pueden editar?</h2><p data-v-898ece04>No, por el momento únicamente hacemos pedidos personalizados.</p></section><section data-v-898ece04><h2 data-v-898ece04>¿Se puede pedir más de una invitación?</h2><p data-v-898ece04>Los kits traen una invitación en archivo imprimible y en JPG para enviar por whatsapp, si por algún motivo necesita dos invitaciones iguales pero con diferente fecha u horario, puede abonar un costo extra mínimo para recibirlas.</p></section><section data-v-898ece04><h2 data-v-898ece04>¿Hacen envíos internacionales?</h2><p data-v-898ece04>¡Por supuesto! Podes abonar a través de Paypal y recibir tu archivo en el mismo plazo, solo tener en cuenta que la franja horaria de atención puede variar. Los medios de envío son los mismos, E-mail y WhatsApp. Asegurate de agendar el numero completo de WhatsApp indicando formato internacional completo.</p></section><section data-v-898ece04><h2 data-v-898ece04>Otras consultas</h2><p data-v-898ece04>Escribinos por WhatsApp o envianos un E-mail y te responderemos a la brevedad 😊.</p></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Preguntas/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-898ece04"]]);
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Show
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": __vite_glob_0_0, "./Pages/Checkout/Item.vue": __vite_glob_0_1, "./Pages/Checkout/Partials/Payments/Mercadopago.vue": __vite_glob_0_2, "./Pages/Checkout/Partials/Payments/Paypal.vue": __vite_glob_0_3, "./Pages/Checkout/Partials/Payments/Transfer.vue": __vite_glob_0_4, "./Pages/Checkout/Partials/Step1Information.vue": __vite_glob_0_5, "./Pages/Checkout/Partials/Step2PayMentMethodSelection.vue": __vite_glob_0_6, "./Pages/Checkout/Partials/Step3Confirmation.vue": __vite_glob_0_7, "./Pages/Checkout/Partials/Step4OrderCreation.vue": __vite_glob_0_8, "./Pages/Checkout/Partials/Step5Payment.vue": __vite_glob_0_9, "./Pages/Dashboard.vue": __vite_glob_0_10, "./Pages/Gallery/Partials/Item.vue": __vite_glob_0_11, "./Pages/Gallery/Show.vue": __vite_glob_0_12, "./Pages/Home.vue": __vite_glob_0_13, "./Pages/Items/Create.vue": __vite_glob_0_14, "./Pages/Items/Edit.vue": __vite_glob_0_15, "./Pages/Items/List.vue": __vite_glob_0_16, "./Pages/Notifications/List.vue": __vite_glob_0_17, "./Pages/Orders/List.vue": __vite_glob_0_18, "./Pages/Orders/Show.vue": __vite_glob_0_19, "./Pages/Preguntas/Show.vue": __vite_glob_0_20 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);

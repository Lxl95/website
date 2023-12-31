<template>
  <div
    :class="{ fullscreen: fullscreen }"
    class="tinymce-container"
    :style="{ width: containerWidth }"
  >
    <textarea :id="tinymceId" class="tinymce-textarea" />
    <div class="editor-custom-btn-container">
      <editorImage
        :up-url="upUrl"
        :up-src="upSrc"
        color="#1890ff"
        class="editor-upload-btn"
        @successCBK="imageSuccessCBK"
      />
    </div>
  </div>
</template>

<script>
/**
 * docs:
 * https://panjiachen.github.io/vue-element-admin-site/feature/component/rich-editor.html#tinymce
 */
import editorImage from "./components/EditorImage";
import plugins from "./plugins";
import toolbar from "./toolbar";
import load from "./dynamicLoadScript";
// import API from "@/api/Applets/publicInterface";
import { imgUpload } from "@/api/columnCategory.js";
// why use this cdn, detail see https://github.com/PanJiaChen/tinymce-all-in-one
// const tinymceCDN = "https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js";
const tinymceCDN = "./tinymce/js/tinymce/tinymce.min.js";

export default {
  name: "Tinymce",
  components: { editorImage },
  props: {
    id: {
      type: String,
      default: function() {
        return (
          "vue-tinymce-" +
          +new Date() +
          ((Math.random() * 1000).toFixed(0) + "")
        );
      }
    },
    value: {
      type: String,
      default: ""
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return [
          "removeformat undo redo |  bullist numlist | outdent indent | forecolor | fullscreen code ",
          "bold italic blockquote | h2 p  media link | alignleft aligncenter alignright | fontsizeselect | fontselect"
        ]; // 修改后 第一步
      }
    },
    menubar: {
      type: String,
      default: "file edit insert view format table newTemplate"
    },
    height: {
      type: [Number, String],
      required: false,
      default: 360
    },
    width: {
      type: [Number, String],
      required: false,
      default: "auto"
    },

    upUrl: {
      type: String,
      default: ""
    },
    upSrc: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false,
      languageTypeList: {
        en: "en",
        zh: "zh_CN",
        es: "es_MX",
        ja: "ja"
      }
    };
  },
  computed: {
    language() {
      return this.languageTypeList[this.$store.getters.language];
    },
    containerWidth() {
      const width = this.width;
      if (/^[\d]+(\.[\d]+)?$/.test(width)) {
        // matches `100`, `'100'`
        return `${width}px`;
      }
      return width;
    }
  },
  watch: {
    value(val) {
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() =>
          window.tinymce.get(this.tinymceId).setContent(val || "")
        );
      }
    },
    language() {
      this.destroyTinymce();
      this.$nextTick(() => this.initTinymce());
    }
  },
  mounted() {
    console.log(this.upUrl);
    this.init();
  },
  activated() {
    if (window.tinymce) {
      this.initTinymce();
    }
  },
  deactivated() {
    this.destroyTinymce();
  },
  destroyed() {
    this.destroyTinymce();
  },
  methods: {
    init() {
      // dynamic load tinymce from cdn
      load(tinymceCDN, err => {
        if (err) {
          this.$message.error(err.message);
          return;
        }
        this.initTinymce();
      });
    },
    initTinymce() {
      const _this = this;
      const templates = [
        {
          title: "停水通知",
          description: "",
          content: "",
          url: "template/停水通知.html"
        },
        {
          title: "重要提醒",
          description: "",
          content: "",
          url: "template/重要提醒.html"
        },
        {
          title: "节日祝福",
          description: "",
          content: "",
          url: "template/节日祝福.html"
        },
        {
          title: "活动通知",
          description: "",
          content: "",
          url: "template/活动通知.html"
        }
      ];
      window.tinymce.init({
        language: this.language,
        convert_urls: false, // 上传图片使用全部路径
        selector: `#${this.tinymceId}`,
        fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt", // 第二步
        font_formats:
          "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n;宋体=宋体;黑体=黑体;仿宋=仿宋;微软雅黑=微软雅黑;楷体-GB2312=楷体-GB2312",

        height: this.height,
        body_class: "panel-body ",
        skin: this.$store.state.app.theme == "dark" ? "oxide-dark" : "", // 深色皮肤
        // 可编辑区域的样式
        content_style:
          this.$store.state.app.theme == "dark"
            ? ".panel-body{ background-color: #222f3e; color: #fff}"
            : "",
        object_resizing: false,
        min_height: 350,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        menubar: this.menubar,
        menu: {
          newTemplate: {
            title: "新闻模板",
            items: "template"
          }
        },
        plugins: plugins,
        end_container_on_empty_block: true,
        powerpaste_word_import: "clean",
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: "square",
        advlist_number_styles: "default",
        imagetools_cors_hosts: ["www.tinymce.com", "codepen.io"],
        default_link_target: "_blank",
        link_title: false,
        templates: templates, // 新闻模板
        template_selected_content_classes: "selcontent",
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: editor => {
          if (_this.value) {
            editor.setContent(_this.value);
          }
          _this.hasInit = true;
          editor.on("NodeChange Change KeyUp SetContent", () => {
            this.hasChange = true;
            this.$emit("input", editor.getContent());
          });
          editor.on("paste", evt => {
            // 监听粘贴事件
            this.onPaste(evt);
          });
        },
        setup(editor) {
          editor.on("FullscreenStateChanged", e => {
            _this.fullscreen = e.state;
          });
        }
        // 整合七牛上传
        // images_dataimg_filter(img) {
        //   setTimeout(() => {
        //     const $image = $(img);
        //     $image.removeAttr('width');
        //     $image.removeAttr('height');
        //     if ($image[0].height && $image[0].width) {
        //       $image.attr('data-wscntype', 'image');
        //       $image.attr('data-wscnh', $image[0].height);
        //       $image.attr('data-wscnw', $image[0].width);
        //       $image.addClass('wscnph');
        //     }
        //   }, 0);
        //   return img
        // },
        // images_upload_handler(blobInfo, success, failure, progress) {
        //   progress(0);
        //   const token = _this.$store.getters.token;
        //   getToken(token).then(response => {
        //     const url = response.data.qiniu_url;
        //     const formData = new FormData();
        //     formData.append('token', response.data.qiniu_token);
        //     formData.append('key', response.data.qiniu_key);
        //     formData.append('file', blobInfo.blob(), url);
        //     upload(formData).then(() => {
        //       success(url);
        //       progress(100);
        //     })
        //   }).catch(err => {
        //     failure('出现未知问题，刷新页面，或者联系程序员')
        //     console.log(err);
        //   });
        // },
      });
    },
    onPaste(event) {
      // 实现图片粘贴上传
      const items = (event.clipboardData || window.clipboardData).items;

      // 搜索剪切板items 只取第一张
      if (items[0].type.indexOf("image") !== -1) {
        console.log("粘贴的是图片类型");
        const file = items[0].getAsFile();
        const formData = new FormData();
        formData.append("file", file);
        // // 上传图片
        imgUpload(formData).then(res => {
          console.log(res);
          if (res.success) {
            var src = this.$store.getters.jsonInfo.imageUrl + res.data;
            // 放到内容当中
            window.tinymce
              .get(this.tinymceId)
              .insertContent(`<img class="wscnph" src="${src}" >`);
          } else {
            this.$message.error("图片上传失败,联系开发人员");
          }
        });
      } else {
        console.log("粘贴的不是图片，不能上传");
      }
    },

    destroyTinymce() {
      const tinymce = window.tinymce.get(this.tinymceId);
      if (this.fullscreen) {
        tinymce.execCommand("mceFullScreen");
      }

      if (tinymce) {
        tinymce.destroy();
      }
    },
    setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value);
    },
    getContent() {
      window.tinymce.get(this.tinymceId).getContent();
    },
    imageSuccessCBK(arr) {
      const _this = this;
      arr.forEach(v => {
        window.tinymce
          .get(_this.tinymceId)
          .insertContent(`<img class="wscnph" src="${v.url}" >`);
      });
    }
  }
};
</script>

<style scoped>
.tinymce-container {
  position: relative;
  line-height: normal;
}
.tinymce-container >>> .mce-fullscreen {
  z-index: 10000;
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
.editor-custom-btn-container {
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 2;
}
.fullscreen .editor-custom-btn-container {
  z-index: 10000;
  position: fixed;
}
.editor-upload-btn {
  display: inline-block;
}
</style>

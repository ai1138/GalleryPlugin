# name: basic-plugin
# about: A super simple plugin to demonstrate how plugins work
# version: 0.0.1
# authors: Awesome Plugin Developer
enabled_site_setting :plugin_name_enabled

register_svg_icon "fa-images" if respond_to?(:register_svg_icon)

after_initialize do
end

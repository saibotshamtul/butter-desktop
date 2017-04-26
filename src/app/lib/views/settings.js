(function (App) {
    'use strict';

    var ReactDOM = require('react-dom');
    var React = require('react');
    var i18nProvider = require('react-i18next').I18nextProvider;
    var Settings = require('butter-component-settings').default;

    App.View.Settings = {};

    App.View.Settings.Container = Backbone.View.extend({
        tagName: 'div',
        className: 'settings-container-contain',
        render: function() {

            var container = this.el; // document.createElement('div');

            var props = {
                tabs: this.collection,
                settings: AdvSettings
            };
            var element = React.createElement(
                i18nProvider, {i18n: i18n},
                React.createElement(Settings, props, null));

            ReactDOM.unmountComponentAtNode(container);
            ReactDOM.render(element, container);
            $('.filter-bar').hide();
        }
    });

})(window.App);

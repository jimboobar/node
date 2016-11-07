
import RenderItem from './RenderItem';

(function(exports) {
    const element = document.createElement('div');

    document.body.appendChild(element);

    exports.RenderItem = new RenderItem(element);

}(window));

window.RenderItem.render();

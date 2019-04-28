(function(){

    function onload(cb) {
        if(window.attachEvent) {
            window.attachEvent('onload', cb);
        } else {
            if(window.onload) {
                var current_cb = window.onload;
                window.onload = function(ev) {
                    current_cb(evt);
                    cb(ev);
                };
            } else {
                window.onload = cb;
            }
        }
    }

    var url_params = null;

    function handle_switches() {
        var switches = {};

        var elements = document.getElementsByClassName("morph-switch");
        for (var i=0; i<elements.length; i++) {
            var el = elements[i];
            var name = el.dataset["morph-name"];
            var default_state = el.dataset["morph-default"] || "0";
            var state_str = url_params.has(name) ? url_params.get(name) : default_state;
            var state = state_str != "0";
            switches[name] = state;
            el.checked = state;
            el.onchange = function(ev) {
                var el = ev.target;
                var name = el.dataset["morph-name"];
                var checked = el.checked;
                update_url(name, checked);
            }
        }

        var elements = document.getElementsByClassName("morph-text");
        for (var i=0; i<elements.length; i++) {
            var el = elements[i];
            var cond = el.dataset["morph-if"];
            if (cond in switches) {
                el.hidden = !switches[cond];
            } else {
                console.log("morph: Unexpected text display condition:", cond);
            }
        }
    }

    function update_url(name, value) {
        url_params.set(name, value ? "1" : "0");
        window.location.search = url_params.toString();
    }

    onload(function() {
        url_params = new URLSearchParams(window.location.search);
        handle_switches();
    });

}());

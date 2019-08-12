package com.rnts_sgs_pro.component;

import android.support.annotation.Nullable;

import com.facebook.drawee.components.DraweeEventTracker;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.common.SystemClock;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.views.swiperefresh.RefreshEvent;

import java.util.Map;

import javax.annotation.Nonnull;

public class ScanViewManager extends ViewGroupManager<ScanView> {
    public enum Events {
        EVENT_ON_BAR_CODE_READ("onScanCodeRead");


        private final String mName;

        Events(final String name) {
            mName = name;
        }

        @Override
        public String toString() {
            return mName;
        }
    }
    @Nonnull
    @Override
    public String getName() {
        return "ScanView";
    }
    @Override
    @Nullable
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        MapBuilder.Builder<String, Object> builder = MapBuilder.builder();
        for (Events event : Events.values()) {
            builder.put(event.toString(), MapBuilder.of("registrationName", event.toString()));
        }
        return builder.build();
    }
    @Nonnull
    @Override
    protected ScanView createViewInstance(@Nonnull ThemedReactContext reactContext) {
        return new ScanView(reactContext);
    }

    @Override
    protected void addEventEmitters(@Nonnull ThemedReactContext reactContext, @Nonnull ScanView view) {
        super.addEventEmitters(reactContext, view);
        view.scanGetResult(new ScanView.OnScanResult() {
            @Override
            public void Result(String barCode) {

                reactContext.getNativeModule(UIManagerModule.class).getEventDispatcher()
                        .dispatchEvent(new RefreshEvent(view.getId(), barCode));
            }
        });
    }

    protected class RefreshEvent extends Event<RefreshEvent>{

        private int id;
        private String barCode;

        public RefreshEvent(int id, String barCode) {
            super(id);
            this.id = id;
            this.barCode = barCode;
        }

        @Override
        public String getEventName() {
            return "onScanCodeRead";
        }

        @Override
        public void dispatch(RCTEventEmitter rctEventEmitter) {
            rctEventEmitter.receiveEvent(id,getEventName(),serializeEventData());
        }

        private WritableMap serializeEventData() {
            WritableMap event = Arguments.createMap();
            event.putString("barCode",barCode);
            return event;
        }
    }
}

package com.rnts_sgs_pro.component;

import android.content.Context;
import android.os.Handler;
import android.util.AttributeSet;
import android.widget.FrameLayout;

public class ScanView extends FrameLayout {
    public ScanView( Context context) {
        super(context);
    }

    public ScanView(Context context,  AttributeSet attrs) {
        super(context, attrs);
    }

    public ScanView( Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }


    interface OnScanResult{
        void Result(String barCode);
    }



    public void scanGetResult(OnScanResult onScanResult){

        if (onScanResult != null){
            Handler handler = new Handler();
            handler.postDelayed(new Runnable() {
                @Override
                public void run() {
                    handler.postDelayed(this,100);
                    onScanResult.Result("123456789");
                }
            },100);
        }
    }
}

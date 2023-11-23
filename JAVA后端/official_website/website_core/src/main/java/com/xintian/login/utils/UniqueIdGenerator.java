package com.xintian.login.utils;

/**
 * 生成唯一id
 * @author wt
 * @date 2023/10/16
 */
public class UniqueIdGenerator {
    private static final long START_TIMESTAMP = 1645678900000L; // 设置起始时间戳
    private static long lastTimestamp = -1L;
    private static long sequence = 0L;

    public synchronized static long generateId() {
        long currentTimestamp = System.currentTimeMillis();
        if (currentTimestamp < lastTimestamp) {
            throw new RuntimeException("时间戳倒退错误");
        }

        if (currentTimestamp == lastTimestamp) {
            sequence = (sequence + 1) & 4095; // 序列号取值范围为0~4095
            if (sequence == 0) {
                currentTimestamp = waitNextMillis(currentTimestamp);
            }
        } else {
            sequence = 0;
        }

        lastTimestamp = currentTimestamp;
        return ((currentTimestamp - START_TIMESTAMP) << 12) | sequence;
    }

    private static long waitNextMillis(long currentTimestamp) {
        long timestamp = System.currentTimeMillis();
        while (timestamp <= currentTimestamp) {
            timestamp = System.currentTimeMillis();
        }
        return timestamp;
    }
}

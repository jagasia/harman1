import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {
    public static void main(String[] args) {
        // Step 1: Create a thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        // Step 2: Create and submit tasks (Runnable)
        for (int i = 1; i <= 10; i++) {
            Runnable task = new Task("Task-" + i);
            executor.execute(task);
        }

        // Step 3: Shut down the executor
        executor.shutdown();
    }
}
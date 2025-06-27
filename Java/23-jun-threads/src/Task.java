class Task implements Runnable {
    private String name;

    public Task(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        System.out.println(name + " is running on " + Thread.currentThread().getName());
        try {
            Thread.sleep(2000); // Simulate processing
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(name + " completed.");
    }
}
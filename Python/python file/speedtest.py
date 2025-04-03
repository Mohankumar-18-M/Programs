import speedtest

def test_speed():
    st = speedtest.Speedtest()
    st.get_best_server()
    download_speed = st.download() / 1_000_000
    upload_speed = st.upload() / 1_000_000
    print(f"Download Speed: {download_speed:.2f}Mbps")
    print(f"Upload speed: {upload_speed:.2f}Mbps")
if __name__ == "__main__":
    print("Testing Internet Speed...")
    test_speed()
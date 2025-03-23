<template>
  <div>
    <h2>Text Interpolation</h2>
    <p>{{ greeting }}</p>
  </div>
</template>

<script>
export default {
  name: "TextInterpolation",
  data() {
    return {
      greeting: "Hello from Text Interpolation!"
    };
  }
};
</script>

<template>
  <div>
    <h2>Event Listener</h2>
    <button @click="showAlert">Klik Aku!</button>
  </div>
</template>

<script>
export default {
  name: "EventListener",
  methods: {
    showAlert() {
      alert("Tombol diklik!");
    }
  }
};
</script>

<template>
  <div>
    <h2>Form Binding</h2>
    <input v-model="username" placeholder="Masukkan nama" />
    <p>Halo, {{ username }}!</p>
  </div>
</template>

<script>
export default {
  name: "FormBinding",
  data() {
    return {
      username: ""
    };
  }
};
</script>

<template>
  <div>
    <h2>Attribute Binding</h2>
    <img :src="imageUrl" :alt="imageAlt" width="150" />
  </div>
</template>

<script>
export default {
  name: "AttributeBinding",
  data() {
    return {
      imageUrl: "https://via.placeholder.com/150",
      imageAlt: "Gambar Placeholder"
    };
  }
};
</script>

<template>
  <div>
    <h2>Conditional Rendering</h2>
    <button @click="toggleMessage">Toggle Pesan</button>
    <p v-if="isVisible">Pesan ini ditampilkan!</p>
  </div>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    toggleMessage() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>


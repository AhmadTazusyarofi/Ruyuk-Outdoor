import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { catalogData } from "@/data/catalog";
import { toast } from "@/hooks/use-toast";

const ContactBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    startDate: "",
    duration: "",
    pickupType: "pickup",
    deliveryAddress: "",
    notes: "",
    items: {} as Record<string, number>,
  });

  const handleItemToggle = (itemId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [itemId]: checked ? 1 : 0,
      },
    }));
  };

  const handleItemQuantityChange = (itemId: string, quantity: number) => {
    if (quantity < 0) return;
    setFormData((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [itemId]: quantity,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name.trim() ||
      !formData.whatsapp.trim() ||
      !formData.startDate ||
      !formData.duration
    ) {
      toast({
        title: "Form Tidak Lengkap",
        description: "Mohon isi semua field yang wajib diisi.",
        variant: "destructive",
      });
      return;
    }

    const selectedItems = Object.entries(formData.items)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const item = catalogData.find((i) => i.id === id);
        return `${item?.name} (${qty}x)`;
      });

    if (selectedItems.length === 0) {
      toast({
        title: "Pilih Item",
        description: "Silakan pilih minimal satu item untuk disewa.",
        variant: "destructive",
      });
      return;
    }

    // Save to localStorage
    localStorage.setItem("ruyukBooking", JSON.stringify(formData));

    // Format WhatsApp message
    const nomorToko = "6285624318915"; // Replace with actual store WhatsApp number
    const pesan = `Halo Ruyuk Outdoor, saya ingin booking:

Nama: ${formData.name}
WA: ${formData.whatsapp}
Tanggal: ${formData.startDate} • Durasi: ${formData.duration} hari

Item:
${selectedItems.join("\n")}

Pengambilan: ${
      formData.pickupType === "pickup" ? "Pickup di Store" : "Delivery"
    }
${
  formData.pickupType === "delivery"
    ? `Alamat: ${formData.deliveryAddress}`
    : ""
}

${formData.notes ? `Catatan: ${formData.notes}` : ""}`;

    const url = `https://wa.me/${nomorToko}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");

    toast({
      title: "Berhasil!",
      description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan booking.",
    });
  };

  const handleChatAdmin = () => {
    const nomorToko = "6281234567890"; // Replace with actual store WhatsApp number
    const pesan =
      "Halo Ruyuk Outdoor, saya ingin bertanya tentang rental alat outdoor.";
    const url = `https://wa.me/${nomorToko}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto ">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6 text-foreground">
              Kontak & Booking
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Isi form booking atau hubungi kami langsung via WhatsApp
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Alamat</h3>
                  <p className="text-muted-foreground">
                    Jl. Outdoor Adventure No. 123
                    <br />
                    Jakarta Selatan, DKI Jakarta
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">
                    Jam Operasional
                  </h3>
                  <p className="text-muted-foreground">
                    Senin - Minggu: 09.00 - 20.00 WIB
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">
                    Sosial Media
                  </h3>
                  <p className="text-muted-foreground">@ruyuk_outdoor</p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleChatAdmin}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat Admin
            </Button>
          </div>

          {/* Booking Form */}
          <Card className="p-6 sm:p-8 shadow-card bg-card border border-yellow-500">
            <h3 className="text-2xl font-bold  mb-6 text-foreground">
              Form Booking
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">
                  Nama Lengkap <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              <div>
                <Label htmlFor="whatsapp">
                  Nomor WhatsApp <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      whatsapp: e.target.value,
                    }))
                  }
                  placeholder="08xxxxxxxxxx"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">
                    Tanggal Mulai <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        startDate: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="duration">
                    Durasi (hari) <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    placeholder="1"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="mb-3 block">
                  Pilih Item <span className="text-red-600">*</span>
                </Label>
                <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                  {catalogData.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                    >
                      <Checkbox
                        id={item.id}
                        checked={formData.items[item.id] > 0}
                        onCheckedChange={(checked) =>
                          handleItemToggle(item.id, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={item.id}
                        className="flex-1 cursor-pointer"
                      >
                        {item.name}
                      </Label>
                      {formData.items[item.id] > 0 && (
                        <Input
                          type="number"
                          min="1"
                          value={formData.items[item.id]}
                          onChange={(e) =>
                            handleItemQuantityChange(
                              item.id,
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-20"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="pickupType">
                  Lokasi Pengambilan <span className="text-red-600">*</span>
                </Label>
                <Select
                  value={formData.pickupType}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, pickupType: value }))
                  }
                >
                  <SelectTrigger id="pickupType">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pickup">Pickup di Store</SelectItem>
                    <SelectItem value="delivery">Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.pickupType === "delivery" && (
                <div>
                  <Label htmlFor="deliveryAddress">Alamat Pengiriman</Label>
                  <Textarea
                    id="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        deliveryAddress: e.target.value,
                      }))
                    }
                    placeholder="Masukkan alamat lengkap"
                    rows={3}
                  />
                </div>
              )}

              <div>
                <Label htmlFor="notes">Catatan Tambahan</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  placeholder="Opsional informasi tambahan atau pertanyaan"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-foreground"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Kirim via WhatsApp
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactBooking;
